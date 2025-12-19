import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Logo, RTE } from "../index"
import service from '../../appwrite/appwrite_config'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showLoader,hideLoader } from '../../store/uiSlice'
function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.slug || '',
      content: post?.content || '',
      status: post?.status || 'active',
      
    }
  })

  const navigate = useNavigate()
  const userData = useSelector(state => state.auth.userData)
  const dispatch=useDispatch()
  const userId=userData.$id
 const submit = async (data) => {
  if (!userId) {
    alert("Please login first")
    return
  }

  dispatch(showLoader())

  try {
    if (post) {
      const oldImage = post.featuredImage
      const file = data.image?.[0]
        ? await service.uploadFile(data.image[0])
        : null

      if (file && oldImage) {
        await service.deleteFile(oldImage)
      }

      const dbPost = await service.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : oldImage,
      })

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
      }
    } else {
      const file = await service.uploadFile(data.image[0])
      if (!file) return

      const dbPost = await service.createPost({
        ...data,
        featuredImage: file.$id,
        userId,
      })

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
      }
    }
  } catch (err) {
    console.error(err)
  } finally {
    dispatch(hideLoader())
  }
}


  const slugTransform = useCallback((value) => {
    if (value && typeof value === 'string') {
      return value.trim().toLowerCase().replace(/ /g, '-')
    }
  })

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue('slug', slugTransform(value.title), { shouldValidate: true })
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, slugTransform, setValue])

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col lg:flex-row gap-6"
    >
      {/* Left section */}
      <div className="w-full lg:w-2/3 rounded-2xl bg-slate-900 border border-white/10 p-6">
        <Input
          label="Title"
          placeholder="Enter post title"
          className="mb-5"
          {...register("title", { required: true })}
        />

        <Input
          label="Slug"
          placeholder="auto-generated-slug"
          className="mb-5"
          {...register("slug", { required: true })}
          onInput={(e) =>
            setValue(
              "slug",
              slugTransform(e.currentTarget.value),
              { shouldValidate: true }
            )
          }
        />

        <RTE
          label="Content"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      {/* Right section */}
      <div className="w-full lg:w-1/3 rounded-2xl bg-slate-900 border border-white/10 p-6">
        <Input
          label="Featured Image"
          type="file"
          className="mb-5"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />

        {post && (
          <div className="mb-5 overflow-hidden rounded-xl border border-white/10">
            <img
              src={service.getFileView(post.featuredImage)}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        )}

        <div className="mb-6">
          <label className="mb-2 inline-block text-sm font-medium text-slate-300">
            Status
          </label>
          <select
            className="
              w-full rounded-lg
              bg-slate-800 text-slate-100
              border border-white/10
              px-3 py-2
              outline-none
              focus:border-indigo-400
            "
            {...register("status", { required: true })}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update Post" : "Publish Post"}
        </Button>
      </div>
    </form>
  )
}

export default PostForm
