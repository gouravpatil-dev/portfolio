export default function ProjectArt({ tone }) {
  if (tone === 'lime') {
    return <div className="project-art lime visualizer-art" aria-hidden="true">
      <span /><span /><span /><span /><i />
      </div>
  }

  if (tone === 'blue') {
    return <div className="project-art blue campus-art" aria-hidden="true">
      <i /><i /><b /><b /><b />
      </div>
  }

  if (tone === 'purple') {
    return (
      <div className="project-art purple mcp-art" aria-hidden="true">
        <i /><i /><b /><b /><b />
        <span>resource</span>
        <span>preview</span>
        <span>confirm</span>
      </div>
    )
  }

  if (tone === 'peach') {
    return (
      <div className="project-art peach settleup-art" aria-hidden="true">
        <svg
          className="settleup-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line x1="18" y1="74" x2="50" y2="50" />
          <line x1="50" y1="50" x2="82" y2="26" />
        </svg>

        <b className="settleup-node payer-node" />
        <b className="settleup-node split-node" />
        <b className="settleup-node settle-node" />

        <span className="payer-label">payer</span>
        <span className="split-label">split</span>
        <span className="settle-label">settle</span>
      </div>
  )
}
  

  return <div className="project-art peach os-art" aria-hidden="true">
    <span>idea</span>
    <span>ship</span>
    <span>iterate</span></div>
}
