import Head from 'next/head';
import React, {useEffect} from 'react';
import { Input, Output } from '@/lib/index';
import {withRouter} from "next/router";

function Home(props) {
  const shellRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const outputRef = React.useRef(null);

  const command = props.router.query.command;

  const refocusInput = () => {
      inputRef.current?.focus();
  }

  useEffect(() => {
    refocusInput();
  }, []);

  return (
    <>
      <Head>
        <title>Nathan Smith | Portfolio</title>
      </Head>

    <div className="overflow-hidden h-full rounded" onClick ={refocusInput}
        style={{
            padding: "10px",
        }}
    >
        <div ref={shellRef} className="overflow-y-auto h-full"
          style={{
            outlineColor: "gold",
            border: "2px solid",
            borderRadius: "5px",
            outlineOffset: "-10px",
            padding: "10px",
            }}>
          {/* <History history={history} /> */}
            <Output outputRef={outputRef}/>
            <Input inputRef={inputRef} container={shellRef} routeCommand={command} />
        </div>
    </div>
    <footer
        style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            float: "right",
            lineHeight: "110%",
            letterSpacing: "-1px",
            fontSize: "12px",
            padding: "10px"
        }}
        >
        <pre className="no-highlight">
██╗    ██╗ █████╗ ████████╗██╗  ██╗ █████╗ ███╗   ██╗<br/>
████╗  ██║██╔══██╗╚══██╔══╝██║  ██║██╔══██╗████╗  ██║<br/>
██╔██╗ ██║███████║   ██║   ███████║███████║██╔██╗ ██║<br/>
██║╚██╗██║██╔══██║   ██║   ██╔══██║██╔══██║██║╚██╗██║<br/>
██║ ╚████║██║  ██║   ██║   ██║  ██║██║  ██║██║ ╚████║<br/>
╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝<br/>
        </pre>
    </footer>
    </>
  )
}

export default withRouter(Home);