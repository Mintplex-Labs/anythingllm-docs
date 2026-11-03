import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import _meta from './pages/changelog/_meta.json'
// Get the latest release version from the changelog meta file
const newRelease = Object.keys(_meta)
  .filter((version) => !version.endsWith('.pre') && !version.includes('rc'))
  .reduce((a, b) =>
    0 < a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
      ? a
      : b
  );

const config: DocsThemeConfig = {
  project: {
    link: 'https://x.com/anythingllm', // Link for the X icon on top nav bar
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
      </svg>
    )
  },
  chat: {
    link: 'https://github.com/Mintplex-Labs/anything-llm/discussions', // Link for the GitHub Discussions icon on top nav bar
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 256 256">
        <path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z" />
      </svg>
    )
  },
  navbar: {
    // Reddit icon on top nav bar, styled to match the built-in project/chat icons
    extraContent: (
      <a
        className="nx-p-2 nx-text-current"
        href="https://www.reddit.com/r/anythingllm/"
        target="_blank"
        rel="noreferrer"
        aria-label="r/anythingllm on Reddit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 256 256">
          <path d="M248,104a32,32,0,0,0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17,17.72,2.72a24,24,0,1,0,2.87-15.74l-26-4a8,8,0,0,0-9.11,6.59L121.2,64.16c-21.84.94-42.82,6.38-60.26,15.65a32,32,0,0,0-42.59,47.74A59,59,0,0,0,16,144c0,21.93,12,42.35,33.91,57.49C70.88,216,98.61,224,128,224s57.12-8,78.09-22.51C228,186.35,240,165.93,240,144a59,59,0,0,0-2.35-16.45A32.16,32.16,0,0,0,248,104ZM72,128a16,16,0,1,1,16,16A16,16,0,0,1,72,128Zm91.75,55.07a76.18,76.18,0,0,1-71.5,0,8,8,0,1,1,7.5-14.14,60.18,60.18,0,0,0,56.5,0,8,8,0,1,1,7.5,14.14ZM168,144a16,16,0,1,1,16-16A16,16,0,0,1,168,144Z" />
        </svg>
      </a>
    )
  },
  docsRepositoryBase: 'https://github.com/Mintplex-Labs/anythingllm-docs/tree/main', // Repo link for the 'Edit this page'
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/Mintplex-Labs" target="_blank">
          Mintplex Labs
        </a>
        .
      </span>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s ~ AnythingLLM' // This is the text shown on the tab name, %s will show the title of current page
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1, // Change this number to control the default collapse level
    autoCollapse: true, // If true, automatically collapse inactive folders above defaultMenuCollapseLevel.
    toggleButton: true, // Hide/show sidebar toggle button. Defaults to `false`.
  },
  toc: {
    backToTop: true,
  },
  feedback: {
    content: null,
  },
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://docs.anythingllm.com/images/og.png'
        : `https://docs.anythingllm.com/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#2f3136" />
        <meta name="theme-color" content="#2f3136" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="All-in-one AI application that can do RAG, AI Agents, and much more with no code or infrastructure headaches." />
        <meta name="og:description" content="All-in-one AI application that can do RAG, AI Agents, and much more with no code or infrastructure headaches." />
        <meta property="og:url" content="http://docs.anythingllm.com"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="docs.anythingllm.com" />
        <meta property="twitter:title" content="AnythingLLM | The all-in-one AI desktop app." />
        <meta property="twitter:description" content="All-in-one AI application that can do RAG, AI Agents, and much more with no code or infrastructure headaches." />
        <meta name="twitter:url" content="https://docs.anythingllm.com" />
        <meta name="og:title" content={title ? title + ' – AnythingLLM Docs' : 'AnythingLLM Docs'} />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="AnythingLLM Docs" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </>
    )
  },
  logo: (
    <>
      <svg width="35"
        height="35"
        viewBox="0 0 267 267"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M24 1.2038C12.5333 4.67046 3.59999 13.8705 1.33332 24.5371C0.266652 29.2038 -1.42083e-05 63.4705 0.266652 137.337L0.666653 243.337L3.59999 248.804C7.99999 256.937 16.4 263.604 24.5333 265.337C29.2 266.404 63.4666 266.67 137.333 266.404L243.333 266.004L248.8 263.07C256.933 258.67 263.6 250.27 265.333 242.137C266.4 237.47 266.667 203.204 266.4 129.337L266 23.3371L263.067 17.8705C259.067 10.4038 250.533 3.33716 243.333 1.47049C236.533 -0.262844 29.6 -0.396204 24 1.2038ZM98.6667 79.0705C102.133 80.2705 105.6 83.7372 112.267 92.6705C117.2 99.2038 121.333 105.87 121.333 107.337C121.333 112.67 114.4 119.47 110.267 118.004C109.333 117.604 104.933 112.404 100.667 106.67L92.8 96.0038H79.0667H65.3333V133.337V170.67H79.2H92.9333L127.867 126.004C147.067 101.47 164.133 80.6705 165.733 79.7372C169.733 77.4705 200.267 76.6705 206.8 78.5372C209.6 79.3372 213.333 81.8705 215.2 84.1371L218.667 88.2705V132.404C218.667 180.004 218.533 180.67 211.6 185.87C208.133 188.404 206 188.67 188.133 188.67C172 188.67 168 188.27 165.067 186.404C160.267 183.337 146.667 163.47 146.667 159.604C146.667 155.337 153.6 148.804 157.067 149.87C158.4 150.404 162.8 155.204 166.667 160.67L173.733 170.67H187.6H201.333V133.337V96.0038H187.467H173.733L138.8 140.67C119.6 165.204 102.533 186.004 100.933 186.937C96.9333 189.204 66.4 190.004 59.8667 188.137C57.0667 187.337 53.3333 184.804 51.3333 182.537L47.8667 178.404L48.2667 132.67C48.6667 89.0705 48.8 86.8038 51.3333 84.0038C56.1333 78.6705 61.0667 77.4705 78 77.4705C86.8 77.4705 96.1333 78.1371 98.6667 79.0705Z"
          fill="currentColor" />
      </svg>
      <span style={{ marginLeft: '.7em', fontWeight: 700 }}>
        AnythingLLM Docs
      </span>
    </>
  ),
  banner: {
    dismissible: true,
    key: `${newRelease}-release`, // Storage key to keep the banner state (dismissed or not). If you have updated your banner text, you should change the key to make sure the banner is shown again.
    text: (
      <a href="https://anythingllm.com/download" target="_blank">
        🚀 AnythingLLM {newRelease} is live! Update now →
      </a>
    )
  }
}

export default config
