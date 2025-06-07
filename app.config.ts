export default defineAppConfig({
    shadcnDocs: {
        site: {
            name: "Codeon",
            description: "Beautifully designed Nuxt Content template built with shadcn-vue. Customizable. Compatible. Open Source.",
            umami: {
                enable: process.env.NODE_ENV === "production",
                src: "https://analytics.codeon.fr/script.js",
                dataWebsiteId: "6ca16242-bc4b-4d0d-8a1d-8abc883e733a"
            }
        },
        theme: {
            customizable: true,
            color: "zinc",
            radius: 0.5
        },
        header: {
            title: "Codeon",
            showTitle: true,
            showLoadingIndicator: true,
            darkModeToggle: true,
            languageSwitcher: {
                enable: true,
                triggerType: "icon",
                dropdownType: "select"
            },
            logo: {
                light: "/logo.svg",
                dark: "/logo-dark.svg"
            },
            nav: [
                {
                    title: "About",
                    links: [
                        {
                            title: "Projects",
                            to: "/projects",
                            description: "A brief overview of my projects and the journey behind them.",
                            icon: "lucide:rocket"
                        },
                        {
                            title: "Tools",
                            to: "/tools",
                            description: "Explore available UI components and usage examples.",
                            icon: "lucide:wrench"
                        },
                        {
                            title: "Life",
                            to: "/about-me",
                            description: "Discover the configurations and exposed APIs.",
                            icon: "lucide:sprout"
                        }
                    ]
                },
                {
                    title: "Projects",
                    links: [
                        {
                            title: "Needlify",
                            to: "/projects/needlify",
                            description: "For the beautiful component design & docs design",
                            icon: "lucide:notebook-pen"
                        },
                        {
                            title: "Meeio",
                            to: "/projects/meeio",
                            description: "For the vue port of shadcn-ui & some docs component source",
                            icon: "lucide:brain"
                        }
                    ]
                },
                {
                    title: "Blog",
                    to: "https://needlify.com?ref=codeon.fr",
                    target: "_blank",
                    showLinkIcon: true
                }
            ],
            links: [
                {
                    icon: "lucide:github",
                    to: "https://github.com/MrAnyx",
                    target: "_blank"
                }
            ]
        },
        aside: {
            useLevel: true,
            collapse: false,
            collapseLevel: 1,
            folderStyle: "default"
        },
        main: {
            breadCrumb: true,
            showTitle: true,
            editLink: {
                enable: true,
                pattern: "https://github.com/Codeon-org/portfolio/edit/master/content/:path",
                text: "Edit this page on GitHub",
                icon: "lucide:square-pen",
                placement: ["docsFooter", "toc"]
            }
        },
        footer: {
            credits: `Copyright © ${new Date().getFullYear()}`,
            links: [
                {
                    icon: "lucide:github",
                    to: "https://github.com/MrAnyx",
                    target: "_blank"
                }
            ]
        },
        toc: {
            enable: true,
            links: [
                {
                    title: "Star on GitHub",
                    icon: "lucide:star",
                    to: "https://github.com/Codeon-org/portfolio",
                    target: "_blank"
                },
                {
                    title: "Create Issues",
                    icon: "lucide:circle-dot",
                    to: "https://github.com/Codeon-org/portfolio/issues",
                    target: "_blank"
                }
            ]
        },
        search: {
            enable: true,
            inAside: false
        }
    }
});
