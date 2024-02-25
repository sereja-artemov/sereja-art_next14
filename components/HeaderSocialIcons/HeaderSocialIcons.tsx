import Link from 'next/link';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

function HeaderSocialIcons() {
  return (
    <ul className="items-center hidden lg:inline-flex shrink-0">
      <li className="group/social-item hover:bg-darkPrimary dark:hover:bg-whiteSecondary border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full aspect-square h-12">
        <Link
          className="flex items-center justify-center w-full h-full p-2.5"
          target="_blank"
          href="https://t.me/sereja_art"
          aria-label="telegram sereja-art"
          rel="nofollow">
          <FaTelegramPlane
            className="max-w-full group-hover/social-item:fill-whiteSecondary dark:group-hover/social-item:fill-darkPrimary max-h-auto fill-darkPrimary dark:fill-whiteSecondary"
            width="64px"
            height="64px"
          />
        </Link>
      </li>

      <li className="group/social-item hover:bg-darkPrimary dark:hover:bg-whiteSecondary border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full aspect-square h-12">
        <Link
          className="flex items-center justify-center w-full h-full p-2.5"
          target="_blank"
          href="https://wa.me/79513339923"
          aria-label="whatsapp sereja-art"
          rel="nofollow">
          <IoLogoWhatsapp
            className="max-w-full group-hover/social-item:fill-whiteSecondary dark:group-hover/social-item:fill-darkPrimary max-h-auto fill-darkPrimary dark:fill-whiteSecondary"
            width="64px"
            height="64px"
          />
        </Link>
      </li>

      <li className="group/social-item hover:bg-darkPrimary dark:hover:bg-whiteSecondary border border-darkPrimary/50 dark:border-whiteSecondary/30 rounded-full aspect-square h-12">
        <Link
          className="flex items-center justify-center w-full h-full p-2.5"
          target="_blank"
          href="https://vk.me/sereja_art"
          aria-label="vk sereja-art"
          rel="nofollow">
          <svg
            className="max-w-full group-hover/social-item:fill-whiteSecondary dark:group-hover/social-item:fill-darkPrimary max-h-auto fill-darkPrimary dark:fill-whiteSecondary"
            width="64px"
            height="64px"
            viewBox="-2.5 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <title>vk</title>{' '}
              <path d="M16.563 15.75c-0.5-0.188-0.5-0.906-0.531-1.406-0.125-1.781 0.5-4.5-0.25-5.656-0.531-0.688-3.094-0.625-4.656-0.531-0.438 0.063-0.969 0.156-1.344 0.344s-0.75 0.5-0.75 0.781c0 0.406 0.938 0.344 1.281 0.875 0.375 0.563 0.375 1.781 0.375 2.781 0 1.156-0.188 2.688-0.656 2.75-0.719 0.031-1.125-0.688-1.5-1.219-0.75-1.031-1.5-2.313-2.063-3.563-0.281-0.656-0.438-1.375-0.844-1.656-0.625-0.438-1.75-0.469-2.844-0.438-1 0.031-2.438-0.094-2.719 0.5-0.219 0.656 0.25 1.281 0.5 1.813 1.281 2.781 2.656 5.219 4.344 7.531 1.563 2.156 3.031 3.875 5.906 4.781 0.813 0.25 4.375 0.969 5.094 0 0.25-0.375 0.188-1.219 0.313-1.844s0.281-1.25 0.875-1.281c0.5-0.031 0.781 0.406 1.094 0.719 0.344 0.344 0.625 0.625 0.875 0.938 0.594 0.594 1.219 1.406 1.969 1.719 1.031 0.438 2.625 0.313 4.125 0.25 1.219-0.031 2.094-0.281 2.188-1 0.063-0.563-0.563-1.375-0.938-1.844-0.938-1.156-1.375-1.5-2.438-2.563-0.469-0.469-1.063-0.969-1.063-1.531-0.031-0.344 0.25-0.656 0.5-1 1.094-1.625 2.188-2.781 3.188-4.469 0.281-0.5 0.938-1.656 0.688-2.219-0.281-0.625-1.844-0.438-2.813-0.438-1.25 0-2.875-0.094-3.188 0.156-0.594 0.406-0.844 1.063-1.125 1.688-0.625 1.438-1.469 2.906-2.344 4-0.313 0.375-0.906 1.156-1.25 1.031z" />{' '}
            </g>
          </svg>
        </Link>
      </li>
    </ul>
  );
}

export default HeaderSocialIcons;
