ByteBub - Enhanced React + Vite Static Website (TailwindCSS + Framer Motion)

How to run:
1. npm install
2. npm run dev
3. Open http://localhost:5173

Notes:
- Replace placeholder files in src/assets/ with your real images and hero videos.
- Contact form currently opens the user's mail client as a fallback. To enable Formspree:
  1. Create a form at https://formspree.io/
  2. Replace the onSubmit logic in src/components/Contact.jsx with a fetch/post to your Formspree endpoint or a form action.
