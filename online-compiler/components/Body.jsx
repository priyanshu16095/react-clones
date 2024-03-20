import React, { useState  } from 'react'
import './style.css'
import CodeEditor from './CodeEditor'

import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaRust } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import { FaSwift } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";

import { IconButton } from '@mui/material';
import CropFreeIcon from '@mui/icons-material/CropFree';
import LightModeIcon from '@mui/icons-material/LightMode';

function Body() {
  const [code, setCode] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div className='body'>

        <div className="left flex-v border-right">
          <a><FaJava className='icon' /></a>
          <a><FaPython className='icon' /></a>
          <a><FaRust className='icon' /></a>
          <a><FaHtml5 className='icon' /></a>
          <a><FaCss3Alt className='icon' /></a>
          <a><IoLogoJavascript className='icon' /></a>
          <a><FaGolang className='icon' /></a>
          <a><FaReact className='icon' /></a>
          <a><FaSwift className='icon' /></a>
          <a><BiLogoPostgresql className='icon' /></a>
          <a><FaNodeJs className='icon' /></a>
        </div>

        <div className="mid border-right">
          <div className="mid-nav border-bottom">
            <div className="mid-nav-file border-right">
              <p>Main.java</p>
            </div>
            <div className="mid-nav-icons">
              <IconButton><LightModeIcon /></IconButton>
              <IconButton><CropFreeIcon /></IconButton>
              <button className='button-w button-n'>Run</button>
            </div>
          </div>
          <div className="mid-code">
            <CodeEditor code={code} onChange={handleCodeChange} className='mid-codeEditor' />
          </div>
        </div>

        <div className="right border-bottom">
          <div className="right-nav border-bottom">
            <p>Output</p>
            <button className='button-w'>Clear</button>
          </div>
        </div>
    </div>
  )
}

export default Body
