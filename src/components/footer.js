import React from "react";
import styles from "./footer.module.scss";
import { FaTwitter, FaGithub, FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const socialNetwork = (to, text) => {
  switch (to) {
    case 'twitter':
      return `https://twitter.com/${text}`;
    case 'github':
      return `https://github.com/${text}`;
    case 'linkedin':
      return `https://www.linkedin.com/in/${text}`;
    case 'facebook':
      return `https://www.facebook.com/${text}`;
    case 'whatsapp':
      return `https://wa.me/${text}`;
    default:
      return null;
  }
};

const FooterLink = props => (
  <a href={`${socialNetwork(props.to, props.text)}`} className={styles.icons} target="_blank" rel="noopener noreferrer">{props.icon}</a>
)

export default ({ children }) => (
  <div className={styles.footer}>
    <FooterLink to="twitter" text="igmarin" icon={<FaTwitter />} />&nbsp;
    <FooterLink to="github" text="igmarin" icon={<FaGithub />} />&nbsp;
    <FooterLink to="facebook" text="ismaelmarin" icon={<FaFacebookF />} />&nbsp;
    <FooterLink to="linkedin" text="ismaelmarin" icon={<FaLinkedinIn />} />&nbsp;
    <FooterLink to="whatsapp" text="524777929000" icon={<FaWhatsapp />} />&nbsp;
    {children}
  </div>
)
