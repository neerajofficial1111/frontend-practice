import React from 'react'

export default function index({ setActivePage }: { setActivePage: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <div
      className="transition-custom-transition bg-white cursor-pointer min-h-screen"
      onClick={() => setActivePage("about")}>
      About
    </div>
  )
}