import Link from "next/link";

function FeaturedOn() {
  return (
    <section className="p-8 md:p-12 flex flex-wrap items-center justify-center gap-4 md:gap-8">
      <span className="text-xs text-[10px] opacity-50">Featured on</span>
      <Link
        href="https://news.ycombinator.com/item?id=41106325"
        target="_blank"
        title="Featured on Hackers New - UptimeFriend"
        className="cursor-not-allowed"
      >
        <svg
          className="w-28 md:w-32 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100 cursor-pointer"
          viewBox="0 0 1126 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_176_19)">
            <g clipPath="url(#clip1_176_19)">
              <path
                d="M210 0.458344H0.458252V210H210V0.458344Z"
                fill="#FF6600"
                stroke="white"
                strokeWidth="0.09375"
              ></path>
              <path
                d="M77.6457 46.1674L103 98.9889L128.354 46.1674H150.162L111.906 118.043V164.291H94.0946V118.043L55.8381 46.1674H77.6457Z"
                fill="white"
              ></path>
            </g>
            <path d="M333.355 151H310.855V112.562H277.633V151H255.133V63.7539H277.633V95.6875H310.855V63.7539H333.355V151ZM394.352 133.832V120.121C391.5 120.355 388.414 120.688 385.094 121.117C381.773 121.508 379.254 121.977 377.535 122.523C375.426 123.188 373.805 124.164 372.672 125.453C371.578 126.703 371.031 128.363 371.031 130.434C371.031 131.801 371.148 132.914 371.383 133.773C371.617 134.633 372.203 135.453 373.141 136.234C374.039 137.016 375.113 137.602 376.363 137.992C377.613 138.344 379.566 138.52 382.223 138.52C384.332 138.52 386.461 138.09 388.609 137.23C390.797 136.371 392.711 135.238 394.352 133.832ZM394.352 144.027C393.219 144.887 391.812 145.922 390.133 147.133C388.453 148.344 386.871 149.301 385.387 150.004C383.316 150.941 381.168 151.625 378.941 152.055C376.715 152.523 374.273 152.758 371.617 152.758C365.367 152.758 360.133 150.824 355.914 146.957C351.695 143.09 349.586 138.148 349.586 132.133C349.586 127.328 350.66 123.402 352.809 120.355C354.957 117.309 358.004 114.906 361.949 113.148C365.855 111.391 370.699 110.141 376.48 109.398C382.262 108.656 388.258 108.109 394.469 107.758V107.406C394.469 103.773 392.984 101.273 390.016 99.9062C387.047 98.5 382.672 97.7969 376.891 97.7969C373.414 97.7969 369.703 98.4219 365.758 99.6719C361.812 100.883 358.98 101.82 357.262 102.484H355.328V86.6055C357.555 86.0195 361.168 85.3359 366.168 84.5547C371.207 83.7344 376.246 83.3242 381.285 83.3242C393.277 83.3242 401.93 85.1797 407.242 88.8906C412.594 92.5625 415.27 98.3438 415.27 106.234V151H394.352V144.027ZM468.941 152.758C463.199 152.758 457.945 152.074 453.18 150.707C448.453 149.34 444.332 147.23 440.816 144.379C437.34 141.527 434.645 137.934 432.73 133.598C430.816 129.262 429.859 124.184 429.859 118.363C429.859 112.23 430.875 106.938 432.906 102.484C434.977 98.0312 437.848 94.3398 441.52 91.4102C445.074 88.6367 449.176 86.6055 453.824 85.3164C458.473 84.0273 463.297 83.3828 468.297 83.3828C472.789 83.3828 476.93 83.8711 480.719 84.8477C484.508 85.8242 488.043 87.0938 491.324 88.6562V106.645H488.336C487.516 105.941 486.52 105.121 485.348 104.184C484.215 103.246 482.809 102.328 481.129 101.43C479.527 100.57 477.77 99.8672 475.855 99.3203C473.941 98.7344 471.715 98.4414 469.176 98.4414C463.551 98.4414 459.215 100.238 456.168 103.832C453.16 107.387 451.656 112.23 451.656 118.363C451.656 124.691 453.199 129.496 456.285 132.777C459.41 136.059 463.824 137.699 469.527 137.699C472.184 137.699 474.566 137.406 476.676 136.82C478.824 136.195 480.602 135.473 482.008 134.652C483.336 133.871 484.508 133.051 485.523 132.191C486.539 131.332 487.477 130.492 488.336 129.672H491.324V147.66C488.004 149.223 484.527 150.453 480.895 151.352C477.301 152.289 473.316 152.758 468.941 152.758ZM575.172 151H550.621L532.164 122.348L526.422 129.32V151H505.328V59.8281H526.422V114.262L549.156 85.1992H573.473L549.801 113.559L575.172 151ZM650.641 121.996H602.359C602.672 127.152 604.625 131.098 608.219 133.832C611.852 136.566 617.184 137.934 624.215 137.934C628.668 137.934 632.984 137.133 637.164 135.531C641.344 133.93 644.645 132.211 647.066 130.375H649.41V147.309C644.645 149.223 640.152 150.609 635.934 151.469C631.715 152.328 627.047 152.758 621.93 152.758C608.727 152.758 598.609 149.789 591.578 143.852C584.547 137.914 581.031 129.457 581.031 118.48C581.031 107.621 584.352 99.0273 590.992 92.6992C597.672 86.332 606.812 83.1484 618.414 83.1484C629.117 83.1484 637.164 85.8633 642.555 91.293C647.945 96.6836 650.641 104.457 650.641 114.613V121.996ZM629.664 109.633C629.547 105.219 628.453 101.898 626.383 99.6719C624.312 97.4453 621.09 96.332 616.715 96.332C612.652 96.332 609.312 97.3867 606.695 99.4961C604.078 101.605 602.613 104.984 602.301 109.633H629.664ZM713.219 105.297H711.344C710.445 104.984 709 104.75 707.008 104.594C705.016 104.438 703.355 104.359 702.027 104.359C699.02 104.359 696.363 104.555 694.059 104.945C691.754 105.336 689.273 106 686.617 106.938V151H665.523V85.1992H686.617V94.8672C691.266 90.8828 695.309 88.2461 698.746 86.957C702.184 85.6289 705.348 84.9648 708.238 84.9648C708.98 84.9648 709.82 84.9844 710.758 85.0234C711.695 85.0625 712.516 85.1211 713.219 85.1992V105.297ZM846.695 151H825.016L787.984 91.1172V151H767.359V63.7539H794.254L826.07 113.734V63.7539H846.695V151ZM932.594 121.996H884.312C884.625 127.152 886.578 131.098 890.172 133.832C893.805 136.566 899.137 137.934 906.168 137.934C910.621 137.934 914.938 137.133 919.117 135.531C923.297 133.93 926.598 132.211 929.02 130.375H931.363V147.309C926.598 149.223 922.105 150.609 917.887 151.469C913.668 152.328 909 152.758 903.883 152.758C890.68 152.758 880.562 149.789 873.531 143.852C866.5 137.914 862.984 129.457 862.984 118.48C862.984 107.621 866.305 99.0273 872.945 92.6992C879.625 86.332 888.766 83.1484 900.367 83.1484C911.07 83.1484 919.117 85.8633 924.508 91.293C929.898 96.6836 932.594 104.457 932.594 114.613V121.996ZM911.617 109.633C911.5 105.219 910.406 101.898 908.336 99.6719C906.266 97.4453 903.043 96.332 898.668 96.332C894.605 96.332 891.266 97.3867 888.648 99.4961C886.031 101.605 884.566 104.984 884.254 109.633H911.617ZM1052.42 85.1992L1032.03 151H1009.64L996.227 106.645L983.043 151H960.367L940.152 85.1992H962.301L973.551 130.551L987.613 85.1992H1006.3L1019.66 130.551L1030.74 85.1992H1052.42ZM1122.2 130.141C1122.2 136.938 1119.16 142.426 1113.06 146.605C1106.97 150.746 1098.63 152.816 1088.04 152.816C1082.18 152.816 1076.87 152.27 1072.11 151.176C1067.34 150.082 1063.51 148.871 1060.62 147.543V130.199H1062.55C1063.61 130.941 1064.82 131.762 1066.19 132.66C1067.59 133.52 1069.57 134.457 1072.11 135.473C1074.29 136.371 1076.77 137.152 1079.55 137.816C1082.32 138.441 1085.29 138.754 1088.45 138.754C1092.59 138.754 1095.66 138.305 1097.65 137.406C1099.64 136.469 1100.64 135.102 1100.64 133.305C1100.64 131.703 1100.05 130.551 1098.88 129.848C1097.71 129.105 1095.48 128.402 1092.2 127.738C1090.64 127.387 1088.51 127.016 1085.82 126.625C1083.16 126.195 1080.74 125.688 1078.55 125.102C1072.57 123.539 1068.14 121.117 1065.25 117.836C1062.36 114.516 1060.91 110.395 1060.91 105.473C1060.91 99.1445 1063.9 93.8906 1069.88 89.7109C1075.89 85.4922 1084.1 83.3828 1094.49 83.3828C1099.41 83.3828 1104.12 83.8906 1108.61 84.9062C1113.14 85.8828 1116.68 86.9375 1119.21 88.0703V104.711H1117.4C1114.27 102.562 1110.7 100.824 1106.68 99.4961C1102.69 98.1289 1098.65 97.4453 1094.55 97.4453C1091.15 97.4453 1088.28 97.9141 1085.93 98.8516C1083.63 99.7891 1082.48 101.117 1082.48 102.836C1082.48 104.398 1083 105.59 1084.06 106.41C1085.11 107.23 1087.59 108.051 1091.5 108.871C1093.65 109.301 1095.95 109.73 1098.41 110.16C1100.91 110.551 1103.41 111.059 1105.91 111.684C1111.46 113.129 1115.56 115.414 1118.22 118.539C1120.88 121.625 1122.2 125.492 1122.2 130.141Z"></path>
          </g>
          <defs>
            <clipPath id="clip0_176_19">
              <rect width="1126" height="210" fill="white"></rect>
            </clipPath>
            <clipPath id="clip1_176_19">
              <rect
                width="214"
                height="214"
                fill="white"
                transform="translate(-4 -4)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </Link>
      <Link
        href="#ProductHunt"
        target="_blank"
        title="Featured on Product Hunt - UptimeFriend"
        className="cursor-not-allowed"
      >
        <svg
          className="w-28 md:w-32 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100  cursor-pointer"
          viewBox="0 0 935 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_176_3)">
            <path
              d="M218.991 109.5C218.991 169.999 170.037 219 109.596 219C49.1552 219 0.200928 169.999 0.200928 109.5C0.200928 49.0012 49.1552 0 109.596 0C170.037 0 218.991 49.0012 218.991 109.5Z"
              fill="#DA552F"
            ></path>
            <path
              d="M124.182 109.5H93.1866V76.65H124.182C133.207 76.65 140.591 84.0413 140.591 93.075C140.591 102.109 133.207 109.5 124.182 109.5ZM124.182 54.75H71.3076V164.25H93.1866V131.4H124.182C145.332 131.4 162.47 114.245 162.47 93.075C162.47 71.905 145.332 54.75 124.182 54.75Z"
              fill="white"
            ></path>
            <path d="M333.947 96.0863C333.947 90.0638 329.298 86.4137 323.281 86.4137H307.145V105.668H323.281C329.298 105.668 333.947 102.018 333.947 96.0863ZM291.921 146V73H325.469C341.057 73 349.536 83.4938 349.536 96.0863C349.536 108.588 340.966 119.081 325.469 119.081H307.236V146H291.921Z"></path>
            <path d="M358.743 146V92.8013H372.418V99.8275C376.155 95.3563 382.537 91.5238 389.009 91.5238V104.846C388.006 104.664 386.821 104.573 385.271 104.573C380.713 104.573 374.697 107.128 372.509 110.504V146.091H358.743V146Z"></path>
            <path d="M434.864 118.716C434.864 110.686 430.123 103.66 421.554 103.66C413.076 103.66 408.336 110.686 408.336 118.716C408.336 126.929 413.076 133.864 421.554 133.864C430.123 133.864 434.864 126.838 434.864 118.716ZM394.114 118.716C394.114 104.025 404.416 91.5238 421.463 91.5238C438.693 91.5238 448.994 104.025 448.994 118.716C448.994 133.408 438.693 146 421.463 146C404.416 146 394.114 133.408 394.114 118.716Z"></path>
            <path d="M494.94 127.932V109.591C492.661 106.124 487.738 103.66 483.271 103.66C475.431 103.66 470.053 109.774 470.053 118.716C470.053 127.75 475.431 133.864 483.271 133.864C487.738 133.864 492.661 131.4 494.94 127.932ZM494.94 146V138.061C490.838 143.263 485.277 146 478.895 146C465.859 146 455.922 136.145 455.922 118.716C455.922 101.835 465.677 91.5238 478.895 91.5238C485.003 91.5238 490.838 94.0788 494.94 99.4625V73H508.705V146H494.94Z"></path>
            <path d="M557.204 146V138.152C553.648 141.985 547.449 146 538.971 146C527.576 146 522.197 139.795 522.197 129.666V92.8012H535.872V124.282C535.872 131.491 539.609 133.864 545.444 133.864C550.731 133.864 554.925 130.944 557.295 127.932V92.8012H570.969V146H557.204Z"></path>
            <path d="M581.088 118.716C581.088 102.839 592.666 91.5238 608.619 91.5238C619.285 91.5238 625.667 96.1775 629.131 100.923L620.197 109.318C617.736 105.668 613.998 103.751 609.258 103.751C600.962 103.751 595.219 109.774 595.219 118.808C595.219 127.841 601.053 133.955 609.258 133.955C613.998 133.955 617.736 131.765 620.197 128.298L629.131 136.693C625.667 141.438 619.285 146.183 608.619 146.183C592.666 146 581.088 134.685 581.088 118.716Z"></path>
            <path d="M640.891 131.674V104.664H632.322V92.71H640.891V78.5663H654.565V92.8013H665.049V104.755H654.565V128.115C654.565 131.491 656.297 133.955 659.306 133.955C661.311 133.955 663.317 133.225 664.046 132.313L666.964 142.715C664.958 144.54 661.311 146.091 655.568 146.091C645.905 146 640.891 141.073 640.891 131.674Z"></path>
            <path d="M752.383 146V114.519H718.562V146H703.337V73H718.562V101.196H752.383V73H767.789V146H752.383Z"></path>
            <path d="M816.561 146V138.152C813.006 141.985 806.807 146 798.329 146C786.933 146 781.555 139.795 781.555 129.666V92.8012H795.229V124.282C795.229 131.491 798.967 133.864 804.801 133.864C810.089 133.864 814.282 130.944 816.652 127.932V92.8012H830.327V146H816.561Z"></path>
            <path d="M878.734 146V113.333C878.734 106.124 874.996 103.66 869.162 103.66C863.783 103.66 859.681 106.671 857.311 109.683V146H843.636V92.8013H857.311V99.4625C860.684 95.63 867.065 91.5238 875.452 91.5238C886.938 91.5238 892.408 98.0025 892.408 108.04V146H878.734Z"></path>
            <path d="M908.817 131.674V104.664H900.248V92.71H908.817V78.5663H922.492V92.8013H932.975V104.755H922.492V128.115C922.492 131.491 924.224 133.955 927.232 133.955C929.238 133.955 931.243 133.225 931.973 132.313L934.89 142.715C932.884 144.54 929.238 146.091 923.494 146.091C913.831 146 908.817 141.073 908.817 131.674Z"></path>
          </g>
          <defs>
            <clipPath id="clip0_176_3">
              <rect width="935" height="219" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </Link>
      <Link
        href="#Reddit"
        target="_blank"
        title="Featured on Reddit - UptimeFriend"
        className="cursor-not-allowed"
      >
        <svg
          className="w-[5.5rem] md:w-24 fill-base-content saturate-0 opacity-80 hover:opacity-100 hover:saturate-100 duration-100 cursor-pointer"
          viewBox="0 0 644 214"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_180_2)">
            <path
              d="M627.075 157.051V97.6266H633.795C634.727 97.7109 635.666 97.5995 636.552 97.2996C637.439 96.9997 638.253 96.518 638.942 95.8851C639.631 95.2523 640.181 94.4824 640.556 93.6247C640.931 92.767 641.123 91.8405 641.119 90.9044V90.7028C641.231 89.7931 641.155 88.8701 640.897 87.9906C640.639 87.1111 640.204 86.2937 639.619 85.5886C639.034 84.8834 638.311 84.3055 637.494 83.8902C636.677 83.475 635.784 83.2312 634.87 83.1739H627.075V72.0822C627.084 70.0116 626.315 68.0133 624.922 66.4822C623.528 64.9512 621.611 63.999 619.55 63.8139C617.432 63.6844 615.349 64.395 613.752 65.7918C612.154 67.1885 611.172 69.1588 611.016 71.2755V83.3083H604.297C603.365 83.2241 602.426 83.3354 601.54 83.6353C600.653 83.9352 599.839 84.417 599.15 85.0498C598.46 85.6826 597.911 86.4525 597.536 87.3102C597.161 88.1679 596.969 89.0945 596.973 90.0305V90.5011C596.861 91.4108 596.937 92.3337 597.195 93.2132C597.452 94.0927 597.887 94.9101 598.473 95.6153C599.058 96.3204 599.781 96.8984 600.598 97.3136C601.415 97.7289 602.308 97.9727 603.222 98.03H610.815V157.253C610.815 159.374 611.657 161.409 613.157 162.909C614.656 164.409 616.69 165.252 618.811 165.252C620.921 165.362 622.989 164.632 624.563 163.221C626.137 161.811 627.088 159.834 627.21 157.723C627.235 157.491 627.188 157.256 627.075 157.051Z"
              fill="#D7DADC"
            ></path>
            <path
              d="M577.554 83.3755C585.422 83.3755 591.799 76.9951 591.799 69.1244C591.799 61.2537 585.422 54.8733 577.554 54.8733C569.687 54.8733 563.31 61.2537 563.31 69.1244C563.31 76.9951 569.687 83.3755 577.554 83.3755Z"
              fill="#FF4500"
            ></path>
            <path
              d="M585.483 98.5005C585.483 96.379 584.641 94.3443 583.141 92.8441C581.642 91.3439 579.608 90.5011 577.487 90.5011C575.367 90.5011 573.333 91.3439 571.833 92.8441C570.334 94.3443 569.491 96.379 569.491 98.5005V157.051C569.491 159.173 570.334 161.207 571.833 162.708C573.333 164.208 575.367 165.051 577.487 165.051C579.608 165.051 581.642 164.208 583.141 162.708C584.641 161.207 585.483 159.173 585.483 157.051V98.5005Z"
              fill="#D7DADC"
            ></path>
            <path
              d="M467.223 53.9994C467.223 51.8779 466.381 49.8432 464.881 48.343C463.382 46.8428 461.348 46 459.227 46C457.107 46 455.073 46.8428 453.573 48.343C452.074 49.8432 451.232 51.8779 451.232 53.9994V89.7617C448.596 87.1123 445.451 85.0254 441.986 83.6273C438.521 82.2292 434.809 81.5489 431.074 81.6278C410.244 81.6278 392.841 100.786 392.841 124.314C392.841 147.842 409.706 167 430.805 167C434.654 167.094 438.483 166.411 442.062 164.99C445.641 163.569 448.897 161.441 451.635 158.732C451.92 159.74 452.403 160.682 453.057 161.501C453.711 162.32 454.522 163 455.442 163.501C456.362 164.002 457.373 164.314 458.416 164.418C459.458 164.523 460.511 164.418 461.512 164.109C463.062 163.643 464.436 162.72 465.455 161.461C466.474 160.202 467.09 158.665 467.223 157.051V53.9994ZM430.738 151.136C418.441 151.136 408.43 139.237 408.43 124.247C408.43 109.256 418.374 97.3578 430.738 97.3578C443.101 97.3578 452.979 109.323 452.979 124.247C452.979 139.17 443.101 150.799 430.805 150.799L430.738 151.136Z"
              fill="#D7DADC"
            ></path>
            <path
              d="M550.812 53.9994C550.812 51.8779 549.969 49.8432 548.47 48.343C546.97 46.8428 544.936 46 542.816 46C541.769 46 540.732 46.2073 539.766 46.6102C538.799 47.013 537.922 47.6033 537.185 48.347C536.448 49.0907 535.865 49.9731 535.471 50.9433C535.076 51.9134 534.878 52.9521 534.887 53.9994V89.7617C532.242 87.1248 529.095 85.0461 525.633 83.6489C522.17 82.2517 518.462 81.5644 514.729 81.6278C493.899 81.6278 476.496 100.786 476.496 124.314C476.496 147.842 493.294 167 514.393 167C518.287 167.131 522.167 166.465 525.795 165.043C529.423 163.622 532.722 161.474 535.492 158.732C535.776 159.74 536.26 160.682 536.914 161.501C537.568 162.32 538.379 163 539.299 163.501C540.219 164.002 541.23 164.314 542.272 164.418C543.315 164.523 544.368 164.418 545.369 164.109C546.924 163.651 548.303 162.73 549.323 161.47C550.343 160.209 550.956 158.668 551.08 157.051L550.812 53.9994ZM514.326 151.136C502.029 151.136 492.085 139.237 492.085 124.247C492.085 109.256 501.962 97.3578 514.326 97.3578C526.689 97.3578 536.567 109.323 536.567 124.247C536.567 139.17 526.689 150.799 514.393 150.799L514.326 151.136Z"
              fill="#D7DADC"
            ></path>
            <path
              d="M376.043 129.624C378.689 129.809 381.3 128.936 383.303 127.197C385.306 125.458 386.537 122.994 386.726 120.348V119.339C386.673 117.419 386.448 115.506 386.054 113.626C384.429 104.88 379.878 96.9483 373.15 91.1333C366.422 85.3183 357.916 81.9662 349.031 81.6278C328.201 81.6278 310.798 100.786 310.798 124.314C310.798 147.842 327.933 167 349.031 167C354.551 167.205 360.049 166.205 365.143 164.069C370.237 161.933 374.805 158.712 378.529 154.631C379.263 153.828 379.831 152.889 380.201 151.866C380.571 150.843 380.736 149.758 380.686 148.671C380.636 147.585 380.372 146.519 379.91 145.534C379.448 144.55 378.796 143.666 377.991 142.934L377.252 142.329C375.609 141.307 373.671 140.864 371.747 141.071C369.823 141.278 368.024 142.124 366.636 143.472C361.923 148.108 355.637 150.796 349.031 151.001C343.462 150.571 338.221 148.193 334.228 144.284C330.235 140.376 327.745 135.186 327.193 129.624H376.043ZM349.166 97.6267C354.072 97.964 358.739 99.8715 362.478 103.067C366.217 106.263 368.829 110.578 369.928 115.373H328.134C329.236 110.567 331.858 106.245 335.611 103.048C339.363 99.8513 344.046 97.95 348.964 97.6267H349.166Z"
              fill="#D7DADC"
            ></path>
            <path
              d="M311.604 89.8962C311.613 87.9899 310.94 86.1433 309.709 84.689C308.477 83.2347 306.766 82.2683 304.885 81.9639C299.583 81.0237 294.127 81.4979 289.066 83.3389C284.005 85.18 279.519 88.3227 276.059 92.4506V91.3751C275.876 89.3714 274.951 87.5086 273.465 86.1523C271.979 84.796 270.041 84.044 268.03 84.044C266.018 84.044 264.08 84.796 262.594 86.1523C261.109 87.5086 260.184 89.3714 260 91.3751V157.051C259.975 159.133 260.736 161.148 262.131 162.694C263.526 164.239 265.453 165.201 267.526 165.387C269.625 165.516 271.692 164.813 273.276 163.429C274.861 162.044 275.837 160.091 275.992 157.992C276.025 157.679 276.025 157.364 275.992 157.051V123.44C275.811 120.238 276.264 117.032 277.326 114.005C278.387 110.979 280.037 108.193 282.178 105.806C284.32 103.42 286.912 101.48 289.806 100.1C292.7 98.7192 295.838 97.9244 299.039 97.7612C300.248 97.694 301.459 97.694 302.668 97.7612H304.28C306.265 97.6093 308.12 96.7161 309.477 95.259C310.834 93.802 311.593 91.8876 311.604 89.8962Z"
              fill="#D7DADC"
            ></path>
          </g>
          <path
            d="M105.5 211C163.766 211 211 163.766 211 105.5C211 47.234 163.766 0 105.5 0C47.234 0 0 47.234 0 105.5C0 163.766 47.234 211 105.5 211Z"
            fill="#FF4500"
          ></path>
          <path
            d="M175.869 105.5C175.761 102.53 174.796 99.6555 173.09 97.2221C171.384 94.7887 169.011 92.9006 166.257 91.7855C163.503 90.6703 160.484 90.3757 157.566 90.9372C154.648 91.4987 151.955 92.8923 149.811 94.95C137.809 86.7918 123.702 82.2847 109.193 81.9735L116.051 49.0575L138.628 53.805C138.896 56.2999 140.045 58.6174 141.868 60.3416C143.691 62.0658 146.069 63.0837 148.575 63.2126C151.081 63.3416 153.551 62.5731 155.542 61.0451C157.532 59.5171 158.913 57.3297 159.436 54.8755C159.959 52.4214 159.59 49.8611 158.395 47.6544C157.201 45.4477 155.259 43.7389 152.918 42.835C150.577 41.931 147.991 41.8909 145.623 42.722C143.256 43.553 141.262 45.2008 139.999 47.3695L114.152 42.2C113.729 42.1073 113.292 42.0993 112.866 42.1767C112.441 42.2541 112.034 42.4152 111.671 42.6507C111.308 42.8862 110.995 43.1915 110.751 43.5487C110.507 43.906 110.336 44.3082 110.248 44.732L102.441 81.3405C87.7545 81.5619 73.4529 86.0724 61.2964 94.317C59.67 92.7867 57.7303 91.6284 55.6118 90.9223C53.4933 90.2162 51.2465 89.9792 49.0273 90.2277C46.8081 90.4762 44.6694 91.2043 42.7595 92.3615C40.8496 93.5187 39.2142 95.0773 37.9666 96.9294C36.7189 98.7815 35.8889 100.883 35.5341 103.087C35.1792 105.292 35.308 107.548 35.9115 109.698C36.515 111.848 37.5788 113.841 39.0291 115.539C40.4795 117.237 42.2817 118.599 44.3109 119.531C44.1921 121.077 44.1921 122.628 44.3109 124.173C44.3109 147.805 71.8464 167.006 105.817 167.006C139.788 167.006 167.324 147.805 167.324 124.173C167.443 122.628 167.443 121.077 167.324 119.531C169.927 118.238 172.111 116.233 173.624 113.75C175.136 111.267 175.914 108.407 175.869 105.5ZM70.3694 116.05C70.3694 113.963 70.9881 111.924 72.1474 110.189C73.3066 108.454 74.9543 107.102 76.8821 106.303C78.8098 105.505 80.9311 105.296 82.9776 105.703C85.0241 106.11 86.9039 107.115 88.3794 108.59C89.8548 110.065 90.8596 111.945 91.2667 113.992C91.6737 116.038 91.4648 118.16 90.6663 120.087C89.8678 122.015 88.5156 123.663 86.7807 124.822C85.0457 125.981 83.006 126.6 80.9194 126.6C79.5339 126.6 78.1621 126.327 76.8821 125.797C75.6021 125.267 74.4391 124.49 73.4594 123.51C72.4798 122.53 71.7026 121.367 71.1725 120.087C70.6423 118.807 70.3694 117.435 70.3694 116.05ZM131.665 145.062C124.18 150.703 114.971 153.574 105.606 153.186C96.2421 153.574 87.0329 150.703 79.5479 145.062C79.0993 144.516 78.87 143.822 78.9047 143.116C78.9394 142.409 79.2355 141.741 79.7356 141.241C80.2356 140.741 80.9037 140.445 81.61 140.41C82.3163 140.376 83.0103 140.605 83.5569 141.053C89.8999 145.706 97.6424 148.051 105.501 147.7C113.369 148.128 121.148 145.858 127.55 141.265C128.11 140.719 128.863 140.418 129.645 140.428C130.032 140.433 130.414 140.514 130.77 140.666C131.125 140.819 131.447 141.04 131.718 141.317C131.988 141.594 132.201 141.922 132.344 142.281C132.488 142.641 132.559 143.025 132.554 143.412C132.549 143.799 132.468 144.181 132.316 144.537C132.163 144.892 131.942 145.214 131.665 145.484V145.062ZM129.766 127.022C127.679 127.022 125.64 126.403 123.905 125.244C122.17 124.085 120.817 122.437 120.019 120.509C119.22 118.582 119.012 116.46 119.419 114.414C119.826 112.367 120.83 110.487 122.306 109.012C123.781 107.537 125.661 106.532 127.708 106.125C129.754 105.718 131.875 105.927 133.803 106.725C135.731 107.524 137.379 108.876 138.538 110.611C139.697 112.346 140.316 114.385 140.316 116.472C140.373 117.901 140.139 119.328 139.628 120.664C139.117 122 138.339 123.218 137.343 124.245C136.346 125.271 135.151 126.084 133.83 126.634C132.51 127.184 131.091 127.459 129.66 127.444L129.766 127.022Z"
            fill="white"
          ></path>
          <defs>
            <clipPath id="clip0_180_2">
              <rect
                width="383"
                height="121"
                fill="white"
                transform="translate(260 46)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </Link>
      <Link
        href="#X"
        target="_blank"
        title="Featured on X - UptimeFriend"
        className="cursor-not-allowed"
      >
        <svg
          className="w-8 md:w-9 fill-base-content saturate-0 contrast-50 opacity-80 hover:opacity-100 hover:saturate-100 hover:contrast-100 duration-100 cursor-pointer"
          viewBox="0 0 252 252"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_177_29)">
            <path
              d="M126 250.793C195.036 250.793 251 194.875 251 125.897C251 56.9181 195.036 1 126 1C56.9644 1 1 56.9181 1 125.897C1 194.875 56.9644 250.793 126 250.793Z"
              fill="black"
              stroke="white"
              strokeMiterlimit="10"
            ></path>
            <path
              d="M48.9999 53.5352L108.748 133.357L48.6233 198.256H62.1561L114.797 141.435L157.327 198.256H203.377L140.265 113.945L196.23 53.5352H182.697L134.219 105.865L95.0494 53.5352H48.9999ZM68.9004 63.4941H90.0554L183.474 188.297H162.319L68.9004 63.4941Z"
              fill="white"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_177_29">
              <rect width="252" height="252" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </Link>
    </section>
  );
}

export default FeaturedOn;
