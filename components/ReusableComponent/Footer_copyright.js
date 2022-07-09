import React from 'react'

function Footer_copyright() {
  return (
    <div>
    <div className="copyright-area">
      <div className="container">
        <p>
          Copyright ©
          <script>
            document.write(new Date().getFullYear());
          </script>2022
          <strong> EZScan.</strong> All Rights Reserved by
          <a href="" target="_blank">  </a>
        </p>
      </div>
    </div>

    </div>
  )
}

export default Footer_copyright