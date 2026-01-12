export const theme = {
    radii: { sm: '6px', md: '12px', xl: '16px' },
    space: { 0: '0', 1: '4px', 2: '8px', 3: '12px', 4: '16px', 6: '24px', 8: '32px' },
    fonts: { body: 'Inter, system-ui, sans-serif', mono: 'ui-monospace, SFMono-Regular, Menlo, monospace' },
    sizes: { container: '1100px' },
    colors: {
        bg: '#0b0c0e',
        surface: '#13151a',
        text: '#e6e9ef',
        subtext: '#aab2c0',
        primary: '#4f7cff',
        primaryText: '#ffffff',
        border: '#2a2f3a',
        focus: '#8ab4ff'
    }
};

export const lightTheme: typeof theme = {
    ...theme,
    colors: {
        bg: '#ffffff',
        surface: '#f6f7f9',
        text: '#111317',
        subtext: '#4b5563',
        primary: '#3b82f6',
        primaryText: '#ffffff',
        border: '#e5e7eb',
        focus: '#2563eb'
    }
};
