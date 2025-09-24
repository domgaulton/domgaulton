
export const InlineCode = ({ children }: { children: string }) => (
  <code style={{
    background: '#f5f2f0',
    color: '#c7254e',
    padding: '2px 4px',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '0.95em'
  }}>
    {children}
  </code>
);