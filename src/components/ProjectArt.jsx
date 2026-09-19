export default function ProjectArt({ tone }) {
  if (tone === 'lime') {
    return <div className="project-art lime visualizer-art" aria-hidden="true"><span /><span /><span /><span /><i /></div>
  }

  if (tone === 'blue') {
    return <div className="project-art blue campus-art" aria-hidden="true"><i /><i /><b /><b /><b /></div>
  }

  if (tone === 'purple') {
    return (
      <div className="project-art purple mcp-art" aria-hidden="true">
        <i /><i /><b /><b /><b />
        <span>resource</span><span>preview</span><span>confirm</span>
      </div>
    )
  }
  
  return <div className="project-art peach os-art" aria-hidden="true"><span>idea</span><span>ship</span><span>iterate</span></div>
}
