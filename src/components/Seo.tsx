import { useEffect } from 'react';

type SeoProps = {
    title: string;
    description?: string;
};

const SITE_NAME = 'Portfolio';
const DEFAULT_DESCRIPTION = 'My portfolio website.';

export default function Seo({ title, description }: SeoProps) {
    useEffect(() => {
        const fullTitle = `${title} | ${SITE_NAME}`;
        document.title = fullTitle;

        const desc = description ?? DEFAULT_DESCRIPTION;

        let meta = document.querySelector('meta[name="description"]');

        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('name', 'description');
            document.head.appendChild(meta);
        }

        meta.setAttribute('content', desc);
    }, [title, description]);

    return null;
}
