import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 inline-block text-sm font-medium text-slate-300">
          {label}
        </label>
      )}

      <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900">
        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey="0lhn26lpcoeiqk7s8z85wmwya8ocluw3qbj6b72njpxj4xpe"
              initialValue={defaultValue}
              init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,

                /* 👇 UI-only editor theming */
                skin: "oxide-dark",
                content_css: "dark",

                plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
                ],

                toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",

                content_style:
                  "body { font-family: Inter, system-ui, Arial, sans-serif; font-size: 14px; }",
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </div>
  )
}

export default RTE
