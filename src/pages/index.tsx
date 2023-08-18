import Head from 'next/head';
import React, {useEffect} from 'react';
import { Input, Output } from '@/lib/index';
import {withRouter} from "next/router";
import {useTheme} from "@/lib/theme";
import theme from "tailwindcss/defaultTheme";

function Home(props) {
  const shellRef = React.createRef<HTMLDivElement>();
  const inputRef = React.createRef<HTMLInputElement>();

  const {themeSettings} = useTheme();

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
          <link rel="icon" href="/favicon.ico?"/>
          <title>Nathan Smith | Portfolio</title>
      </Head>

    <div className="overflow-hidden h-full rounded" onClick ={refocusInput}
        style={{
            padding: "10px",
            backgroundColor: themeSettings.backgroundColor,
        }}
    >
        <div ref={shellRef} className="overflow-y-auto h-full"
          style={{
            border: "2px solid",
            borderColor: themeSettings.borderColor,
            borderRadius: "5px",
            outlineOffset: "-10px",
            padding: "10px",
            }}>
          {/* <History history={history} /> */}
            <Output />
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
            padding: "20px",
            color: themeSettings.footerColor,
        }}
        >
        <pre className="bigfooter no-highlight small:visible">
██╗    ██╗ █████╗ ████████╗██╗  ██╗ █████╗ ███╗   ██╗<br/>
████╗  ██║██╔══██╗╚══██╔══╝██║  ██║██╔══██╗████╗  ██║<br/>
██╔██╗ ██║███████║   ██║   ███████║███████║██╔██╗ ██║<br/>
██║╚██╗██║██╔══██║   ██║   ██╔══██║██╔══██║██║╚██╗██║<br/>
██║ ╚████║██║  ██║   ██║   ██║  ██║██║  ██║██║ ╚████║<br/>
╚═╝  ╚═══╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝<br/>
        </pre>
        <pre className="no-highlight small:hidden" style={{
            position: 'absolute',
            right: '0',
            bottom: '0',
            padding: '20px',
        }}>
███╗   ██╗<br/>
████╗  ██║<br/>
██╔██╗ ██║<br/>
██║╚██╗██║<br/>
██║ ╚████║<br/>
╚═╝  ╚═══╝<br/>
        </pre>
    </footer>
    </>
  )
}

export default withRouter(Home);