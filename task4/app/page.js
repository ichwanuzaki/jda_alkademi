'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const res = await fetch('/api/posts')
    const data = await res.json()
    setPosts(data)
  }

  const handleSubmit = async () => {
    const method = editId ? 'PUT' : 'POST'
    const url = editId ? `/api/posts/${editId}` : '/api/posts'
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    })
    setTitle('')
    setContent('')
    setEditId(null)
    fetchPosts()
  }

  const handleDelete = async (id) => {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' })
    fetchPosts()
  }

  const handleEdit = (post) => {
    setTitle(post.title)
    setContent(post.content)
    setEditId(post.id)
  }

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Next.js CRUD App</h1>
      <div className="space-y-2 mb-6">
        <input
          className="w-full p-2 border"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2"
          onClick={handleSubmit}
        >
          {editId ? 'Update' : 'Create'}
        </button>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="border-b py-2">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.content}</p>
            <div className="space-x-4 mt-1">
              <button className="text-blue-500" onClick={() => handleEdit(post)}>
                Edit
              </button>
              <button className="text-red-500" onClick={() => handleDelete(post.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
