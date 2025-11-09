import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 예시: 저장소명이 my-todo 인 경우
export default defineConfig({
  base: '/todo_react/',
  plugins: [react()],
})
