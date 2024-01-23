type CenterContentProps = {
    children: React.ReactNode;
}

const style = {
    display: 'flex',
    justifyContent: 'center',
    height: 'calc(100vh - 100px)',
    minWidth: '300px',
}

function CenterContent({ children }: CenterContentProps) {
  return <div style={ style }>{children}</div>;
}

export default CenterContent;