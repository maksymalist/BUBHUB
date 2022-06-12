import { useTheme } from 'next-themes'

const Logo = ({ className = '', ...props }) => {
  const { theme, setTheme } = useTheme()
  return (
    <svg
      width="50"
      height="32"
      viewBox="0 0 50 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.6309 0C28.9737 0 40.3771 0.284284 41.2478 5.74062C41.3616 6.45406 41.5893 7.88095 41.9342 9.70622C42.2791 11.5314 42.7412 13.755 43.3318 15.2777C43.9222 16.8004 44.6411 17.6221 45.4437 18.5086C46.2463 19.3951 47.1326 20.3463 47.7402 21.0369C47.8639 21.1776 47.976 21.3073 48.0781 21.4286C48.9792 22.3467 49.5676 23.6175 49.1097 24.8428C49.077 24.9303 49.0393 25.0197 48.9906 25.1142C47.2218 29.0109 36.9898 32 24.6309 32C11.0276 32.0001 0 28.3788 0 23.9117C0 22.1745 2.7455 19.7729 3.89017 18.5086C4.69278 17.6221 5.41162 16.8003 6.00209 15.2777C6.59256 13.755 7.05466 11.5315 7.39961 9.70628C7.74449 7.88102 7.97222 6.45413 8.08602 5.74068C8.96704 0.221345 20.1972 0 24.6309 0Z"
        fill="#3EB9FF"
      />
      <path
        d="M32.3074 18.8378H17.5383V26.5661H32.3074V18.8378Z"
        fill="#F5F5F5"
      />
      <path
        d="M23.4982 18.0239C12.3574 18.0239 16.6011 13.1537 16.6011 24.1063C16.6011 35.0588 14.7714 29.257 25.9122 29.257C37.0529 29.257 33.499 32.1359 33.499 21.1833C33.499 10.2306 34.6389 18.0239 23.4982 18.0239ZM24.7051 26.0369C20.855 26.0369 17.6983 23.0575 17.5002 19.3255C17.4978 19.2776 17.5053 19.2295 17.5222 19.1846C17.5392 19.1396 17.5655 19.0983 17.5991 19.0636C17.6328 19.0289 17.6732 19.0011 17.7182 18.9822C17.7632 18.9634 17.8115 18.9536 17.8605 18.9536H20.0264C20.2155 18.9536 20.3777 19.0953 20.3912 19.2813C20.5623 21.4726 22.4311 23.2037 24.7051 23.2037C26.9793 23.2037 28.8525 21.4726 29.0192 19.2813C29.0327 19.0953 29.1947 18.9536 29.3838 18.9536H31.5499C31.5987 18.9536 31.6472 18.9634 31.692 18.9822C31.737 19.0011 31.7776 19.0289 31.8113 19.0636C31.8449 19.0983 31.8712 19.1396 31.8881 19.1846C31.9051 19.2295 31.9126 19.2776 31.9102 19.3255C31.7121 23.0575 28.5554 26.0369 24.7051 26.0369Z"
        fill="#3EB9FF"
      />
      <path
        d="M16.8459 17.5094C17.993 17.5094 18.9228 16.5363 18.9228 15.3358C18.9228 14.1354 17.993 13.1622 16.8459 13.1622C15.6989 13.1622 14.769 14.1354 14.769 15.3358C14.769 16.5363 15.6989 17.5094 16.8459 17.5094Z"
        fill="#F5F5F5"
      />
      <path
        d="M32.4228 17.5094C33.5699 17.5094 34.4998 16.5363 34.4998 15.3358C34.4998 14.1354 33.5699 13.1622 32.4228 13.1622C31.2758 13.1622 30.3459 14.1354 30.3459 15.3358C30.3459 16.5363 31.2758 17.5094 32.4228 17.5094Z"
        fill="#F5F5F5"
      />
    </svg>
  )
}

export default Logo
