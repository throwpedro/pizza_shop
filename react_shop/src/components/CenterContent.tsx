type CenterContentProps = {
    children: React.ReactNode;
}

const style = {
    display: 'flex',
    justifyContent: 'center',
    minWidth: '300px',
}

function CenterContent({ children }: CenterContentProps) {
  return <div style={ style }>{children}</div>;
}

export default CenterContent;