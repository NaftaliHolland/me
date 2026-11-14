# Portfolio

Astro + Tailwind CSS v4 + Content Collections.

    npm install
    npm run dev

- Edit your name, bio and links in `src/config.ts`.
- Add an entry by creating a `.md` file in `src/content/{projects,experience,writing,reading}`. Frontmatter is validated by `src/content.config.ts`.
- `featured: true` puts an entry on the homepage; every entry appears on its section page.
- Put images in `public/images/` and set `cover: /images/file.jpg` (or use them in the Markdown body).
- Put your resume at `public/resume.pdf`.
