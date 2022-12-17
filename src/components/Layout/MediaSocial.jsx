import React from 'react'
import { ContainerMediaSocial } from './MediaSocial'

import {
  FaYoutube,
  FaInstagram,
  FaDiscord,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

function MediaSocial() {
  return (
    <ContainerMediaSocial>
      <ul>
        <li><a href='#' ><FaYoutube /></a></li>
        <li><a href='#'><FaInstagram /></a></li>
        <li><a href='#'><FaDiscord /></a></li>
        <li><a href='#'><FaTwitter /></a></li>
        <li><a href='#'><FaTwitch /></a></li>
      </ul>
    </ContainerMediaSocial>
  )
}

export default MediaSocial