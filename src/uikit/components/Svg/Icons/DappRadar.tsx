import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1000 160" fill="none" {...props}>
      <g clipPath="url(#clip0_50_804)">
        <path
          d="M224.75 28.4084H258.586C291.323 28.0631 315.438 49.2205 314.959 79.748C315.438 109.663 291.331 132.186 258.586 131.7H224.75V28.4084ZM258.382 112.677C279.207 112.677 293.176 99.6733 293.176 79.8186C293.176 59.7599 279.544 47.5803 258.382 47.5803H245.818V112.716H258.382V112.677ZM392.493 131.77H373.043V124.244C369.95 127.333 366.26 129.758 362.197 131.37C358.134 132.983 353.785 133.749 349.415 133.622C332.98 133.622 322.63 124.04 322.63 110.487C322.63 96.5264 333.93 87.9645 351.943 87.9645H371.394V84.543C371.557 82.6481 371.291 80.7407 370.615 78.9627C369.94 77.1846 368.872 75.5816 367.492 74.2726C366.111 72.9637 364.453 71.9825 362.641 71.402C360.828 70.8214 358.909 70.6565 357.024 70.9194C353.013 71.0271 349.078 72.0446 345.518 73.8949C341.958 75.7452 338.866 78.38 336.474 81.6001L325.481 68.5964C329.517 63.5036 334.677 59.4133 340.558 56.6454C346.439 53.8776 352.881 52.5074 359.379 52.6421C363.847 52.2173 368.354 52.7843 372.577 54.3023C376.8 55.8204 380.635 58.252 383.808 61.4236C386.982 64.5951 389.415 68.4281 390.934 72.6486C392.453 76.869 393.02 81.3728 392.595 85.8378V131.77H392.493ZM371.292 101.855H354.754C347.836 101.855 343.934 104.523 343.934 109.656C343.934 114.788 348.315 118.076 355.029 118.076C357.12 118.194 359.214 117.886 361.182 117.17C363.15 116.453 364.951 115.344 366.476 113.909C368.002 112.474 369.219 110.744 370.053 108.825C370.888 106.905 371.322 104.835 371.331 102.742L371.292 101.855ZM453.239 133.622C448.929 133.76 444.637 132.996 440.639 131.382C436.641 129.767 433.024 127.336 430.019 124.244V159.904H408.818V54.298H428.268V64.0055C431.183 60.2105 434.982 57.185 439.334 55.1922C443.686 53.1993 448.46 52.2997 453.239 52.5715C458.404 52.62 463.504 53.7192 468.23 55.8021C472.955 57.885 477.207 60.9079 480.726 64.6865C484.244 68.4651 486.956 72.9203 488.696 77.7805C490.435 82.6407 491.166 87.804 490.844 92.9557C491.172 98.1226 490.447 103.302 488.713 108.181C486.979 113.059 484.272 117.535 480.756 121.338C477.24 125.14 472.988 128.189 468.258 130.301C463.528 132.413 458.419 133.543 453.239 133.622ZM449.313 71.6727C446.578 71.6218 443.863 72.1516 441.348 73.2271C438.833 74.3026 436.574 75.8993 434.723 77.9117C432.871 79.9241 431.467 82.3064 430.605 84.9011C429.743 87.4958 429.442 90.2438 429.721 92.9635C429.441 95.69 429.74 98.4448 430.601 101.047C431.461 103.65 432.862 106.041 434.712 108.064C436.562 110.087 438.819 111.697 441.336 112.787C443.852 113.876 446.571 114.422 449.313 114.388C452.057 114.399 454.775 113.846 457.296 112.764C459.818 111.681 462.09 110.093 463.972 108.096C465.854 106.1 467.306 103.739 468.237 101.158C469.167 98.5781 469.558 95.8342 469.383 93.0969C469.593 90.3472 469.23 87.5839 468.315 84.9821C467.4 82.3803 465.955 79.9968 464.07 77.9826C462.185 75.9684 459.903 74.3675 457.366 73.2813C454.83 72.1951 452.096 71.6474 449.336 71.6727H449.313ZM547.829 133.622C543.519 133.76 539.227 132.996 535.229 131.382C531.231 129.767 527.614 127.336 524.609 124.244V159.904H503.408V54.298H522.921V64.0055C525.83 60.2196 529.618 57.1996 533.959 55.2072C538.299 53.2148 543.06 52.3101 547.829 52.5715C552.993 52.62 558.094 53.7192 562.82 55.8021C567.545 57.885 571.797 60.9079 575.316 64.6865C578.834 68.4651 581.546 72.9203 583.285 77.7805C585.025 82.6407 585.756 87.804 585.434 92.9557C585.762 98.1226 585.037 103.302 583.303 108.181C581.569 113.059 578.862 117.535 575.346 121.338C571.83 125.14 567.578 128.189 562.848 130.301C558.118 132.413 553.008 133.543 547.829 133.622ZM543.902 71.6727C541.167 71.6218 538.452 72.1516 535.937 73.2271C533.422 74.3026 531.164 75.8993 529.312 77.9117C527.461 79.9241 526.057 82.3064 525.195 84.9011C524.333 87.4958 524.031 90.2438 524.311 92.9635C524.03 95.69 524.33 98.4448 525.19 101.047C526.05 103.65 527.452 106.041 529.302 108.064C531.152 110.087 533.409 111.697 535.925 112.787C538.442 113.876 541.16 114.422 543.902 114.388C546.647 114.399 549.364 113.846 551.886 112.764C554.408 111.681 556.68 110.093 558.562 108.096C560.444 106.1 561.895 103.739 562.826 101.158C563.757 98.5781 564.147 95.8342 563.973 93.0969C564.189 90.3459 563.83 87.5801 562.917 84.9756C562.005 82.3712 560.56 79.9852 558.674 77.9697C556.788 75.9542 554.502 74.3534 551.963 73.2693C549.424 72.1851 546.687 71.6414 543.926 71.6727H543.902ZM662.356 131.77L635.571 95.2864H620.094V131.77H598.893V28.4084H637.731C659.372 28.4084 674.99 41.8908 674.99 61.7454C675.1 67.873 673.449 73.9036 670.233 79.1214C667.016 84.3392 662.369 88.525 656.843 91.1821L686.156 131.708H662.356V131.77ZM620.031 76.6717H637.723C639.766 76.8887 641.833 76.6604 643.78 76.0026C645.727 75.3447 647.508 74.2729 649.001 72.8609C650.493 71.449 651.662 69.7305 652.426 67.8237C653.19 65.917 653.532 63.8674 653.427 61.816C653.493 59.7812 653.123 57.7558 652.343 55.8749C651.564 53.994 650.392 52.3009 648.906 50.9085C647.419 49.516 645.653 48.4563 643.725 47.7998C641.797 47.1434 639.75 46.9053 637.723 47.1016H620.055L620.031 76.6717ZM757.212 131.77H737.762V124.244C734.67 127.333 730.979 129.758 726.916 131.37C722.853 132.983 718.504 133.749 714.134 133.622C697.699 133.622 687.35 124.04 687.35 110.487C687.35 96.5264 698.649 87.9645 716.663 87.9645H736.113V84.543C736.277 82.6466 736.011 80.7376 735.334 78.9583C734.658 77.1789 733.589 75.5749 732.206 74.2657C730.824 72.9564 729.163 71.9756 727.349 71.3962C725.535 70.8169 723.613 70.6539 721.727 70.9194C717.716 71.0271 713.782 72.0446 710.222 73.8949C706.662 75.7452 703.569 78.38 701.178 81.6001L690.184 68.5964C694.214 63.5136 699.365 59.4299 705.234 56.6638C711.103 53.8978 717.532 52.5241 724.02 52.6499C728.488 52.2252 732.994 52.7921 737.217 54.3101C741.44 55.8282 745.276 58.2599 748.449 61.4314C751.623 64.6029 754.056 68.4359 755.575 72.6564C757.094 76.8769 757.661 81.3806 757.236 85.8457V131.778L757.212 131.77ZM736.011 101.855H719.434C712.517 101.855 708.614 104.523 708.614 109.656C708.614 114.788 712.996 118.076 719.709 118.076C721.8 118.194 723.894 117.886 725.862 117.17C727.83 116.453 729.631 115.344 731.157 113.909C732.682 112.474 733.899 110.744 734.733 108.825C735.568 106.905 736.002 104.835 736.011 102.742V101.855ZM851.189 14.3061V131.7H831.739V122.118C828.828 125.907 825.036 128.929 820.691 130.922C816.346 132.914 811.581 133.817 806.808 133.552C801.632 133.499 796.522 132.392 791.789 130.298C787.056 128.205 782.799 125.169 779.28 121.376C775.76 117.583 773.052 113.113 771.319 108.239C769.586 103.364 768.866 98.1881 769.203 93.0263C768.866 87.8645 769.586 82.6883 771.319 77.8139C773.052 72.9396 775.76 68.4694 779.28 64.6766C782.799 60.8838 787.056 57.8479 791.789 55.7544C796.522 53.661 801.632 52.5539 806.808 52.5008C811.114 52.2941 815.415 53.0122 819.421 54.6069C823.426 56.2016 827.043 58.6358 830.027 61.7454V14.3061H851.189ZM810.781 71.6727C808.037 71.6618 805.319 72.2146 802.798 73.2969C800.276 74.3791 798.003 75.9677 796.122 77.964C794.24 79.9604 792.788 82.3219 791.857 84.9022C790.927 87.4824 790.536 90.2263 790.71 92.9635C790.494 95.7165 790.854 98.4844 791.768 101.09C792.682 103.697 794.129 106.084 796.018 108.1C797.906 110.115 800.195 111.716 802.736 112.798C805.278 113.881 808.018 114.422 810.781 114.388C813.516 114.439 816.231 113.909 818.746 112.833C821.261 111.758 823.519 110.161 825.371 108.149C827.223 106.136 828.626 103.754 829.489 101.159C830.351 98.5647 830.652 95.8167 830.373 93.0969C830.642 90.3727 830.334 87.6225 829.47 85.0249C828.605 82.4273 827.204 80.0406 825.356 78.02C823.508 75.9993 821.255 74.3899 818.744 73.2963C816.233 72.2028 813.52 71.6496 810.781 71.6727ZM933.239 131.77H913.789V124.244C910.696 127.333 907.006 129.758 902.943 131.37C898.88 132.983 894.531 133.749 890.161 133.622C873.726 133.622 863.376 124.04 863.376 110.487C863.376 96.5264 874.676 87.9645 892.689 87.9645H912.14V84.543C912.303 82.6466 912.037 80.7376 911.361 78.9583C910.684 77.1789 909.615 75.5749 908.233 74.2657C906.85 72.9564 905.19 71.9756 903.376 71.3962C901.562 70.8169 899.64 70.6539 897.754 70.9194C893.743 71.0271 889.809 72.0446 886.249 73.8949C882.689 75.7452 879.596 78.38 877.204 81.6001L866.211 68.5964C870.241 63.5136 875.392 59.4299 881.261 56.6638C887.13 53.8978 893.559 52.5241 900.047 52.6499C904.515 52.2252 909.021 52.7921 913.244 54.3101C917.467 55.8282 921.302 58.2599 924.476 61.4314C927.649 64.6029 930.082 68.4359 931.601 72.6564C933.12 76.8769 933.688 81.3806 933.263 85.8457V131.778L933.239 131.77ZM912.14 101.855H895.571C888.653 101.855 884.75 104.523 884.75 109.656C884.75 114.788 889.132 118.076 895.846 118.076C897.937 118.194 900.03 117.886 901.998 117.17C903.966 116.453 905.768 115.344 907.293 113.909C908.818 112.474 910.035 110.744 910.87 108.825C911.704 106.905 912.139 104.835 912.147 102.742L912.14 101.855ZM997.283 72.9048H991.669C988.91 72.5839 986.114 72.8802 983.484 73.7723C980.854 74.6644 978.456 76.1299 976.462 78.0627C974.469 79.9956 972.931 82.3473 971.959 84.9475C970.987 87.5477 970.606 90.3314 970.844 93.0969V131.77H949.643V54.2823H969.093V63.5268C971.628 60.3123 974.866 57.7212 978.559 55.9527C982.252 54.1841 986.301 53.2851 990.396 53.3248C992.739 53.2629 995.076 53.5864 997.314 54.2823V72.9048H997.283Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M180.228 71.9396L143.243 7.84751C141.829 5.45659 139.816 3.47535 137.402 2.09917C134.988 0.722997 132.257 -0.000575227 129.478 -0.000182946H55.5004C52.7105 0.000385618 49.9699 0.734541 47.5537 2.12856C45.1375 3.52258 43.1309 5.52739 41.7352 7.94168L4.75051 72.0102C3.37004 74.4297 2.64404 77.1669 2.64404 79.9521C2.64404 82.7373 3.37004 85.4745 4.75051 87.894L41.7352 151.963C43.1247 154.382 45.13 156.391 47.5476 157.786C49.9652 159.181 52.7089 159.912 55.5004 159.904H129.47C132.26 159.904 135 159.17 137.417 157.776C139.833 156.382 141.839 154.377 143.235 151.963L180.22 87.894C181.602 85.4626 182.33 82.7143 182.331 79.9178C182.333 77.1213 181.608 74.3723 180.228 71.9396ZM92.4851 134.917V123.931C101.196 123.931 109.712 121.349 116.955 116.512C124.198 111.676 129.843 104.801 133.176 96.7577C136.51 88.7145 137.382 79.864 135.683 71.3254C133.983 62.7868 129.789 54.9436 123.629 48.7876C117.469 42.6316 109.621 38.4394 101.078 36.7409C92.534 35.0425 83.6782 35.9142 75.6302 39.2458C67.5822 42.5774 60.7035 48.2193 55.8639 55.4579C51.0243 62.6966 48.4411 71.207 48.4411 79.9128C48.4166 89.5127 51.5725 98.8506 57.4164 106.469L65.363 98.7316C61.503 93.2109 59.4459 86.6321 59.4737 79.8971C59.4737 73.358 61.4139 66.9658 65.0491 61.5287C68.6842 56.0916 73.8509 51.854 79.8958 49.3515C85.9408 46.8491 92.5925 46.1944 99.0098 47.4701C105.427 48.7458 111.322 51.8947 115.948 56.5186C120.575 61.1424 123.726 67.0335 125.002 73.447C126.279 79.8605 125.624 86.5082 123.12 92.5496C120.616 98.5909 116.375 103.755 110.935 107.387C105.495 111.02 99.0988 112.959 92.5558 112.959V101.973C96.9156 101.96 101.174 100.657 104.793 98.2271C108.412 95.7973 111.229 92.3502 112.889 88.3211C114.549 84.2919 114.977 79.8616 114.119 75.5896C113.261 71.3176 111.155 67.3956 108.068 64.3189C104.98 61.2422 101.05 59.149 96.7731 58.3035C92.4961 57.458 88.0643 57.8982 84.0375 59.5685C80.0108 61.2388 76.5696 64.0642 74.1487 67.688C71.7277 71.3118 70.4357 75.5713 70.4356 79.9285C70.4222 83.7873 71.4387 87.5799 73.3803 90.9153L81.6017 82.9028C81.3273 81.946 81.1898 80.9552 81.1934 79.9599C81.1934 77.7264 81.8561 75.5431 83.0977 73.686C84.3393 71.8289 86.1041 70.3814 88.1688 69.5267C90.2335 68.672 92.5055 68.4484 94.6974 68.8841C96.8893 69.3198 98.9027 70.3954 100.483 71.9747C102.063 73.554 103.139 75.5662 103.575 77.7568C104.011 79.9474 103.788 82.218 102.932 84.2815C102.077 86.345 100.629 88.1087 98.7707 89.3496C96.9125 90.5905 94.7278 91.2528 92.493 91.2528C91.3973 91.2435 90.3102 91.058 89.2735 90.7034L60.8479 118.421C60.5824 118.686 60.2842 118.915 59.9606 119.104C59.9236 119.141 59.8696 119.159 59.8163 119.176C59.7675 119.192 59.7195 119.208 59.6857 119.238C59.4727 119.38 59.2433 119.496 59.0026 119.583C58.932 119.62 58.8593 119.638 58.7866 119.655C58.7219 119.671 58.6572 119.687 58.5943 119.716L57.9739 119.92C57.8414 119.917 57.7098 119.944 57.5891 119.999C57.4777 119.999 57.3663 120.02 57.265 120.039C57.1808 120.055 57.1037 120.069 57.0395 120.069C56.9384 120.069 56.8372 120.052 56.7352 120.035C56.6312 120.017 56.5262 119.999 56.4191 119.999C56.2565 120.005 56.0942 119.981 55.9402 119.928L55.3198 119.724C55.2493 119.687 55.1765 119.669 55.1039 119.652C55.0391 119.636 54.9744 119.62 54.9115 119.591C54.6908 119.503 54.4823 119.387 54.2912 119.245C54.1674 119.193 54.0512 119.125 53.9456 119.041C53.748 118.899 53.564 118.739 53.396 118.563C53.3744 118.541 53.3469 118.52 53.3172 118.498C53.2496 118.446 53.1702 118.386 53.1212 118.288C44.2638 109.192 38.8275 97.3147 37.7344 84.6697C36.6412 72.0247 39.9585 59.3911 47.1237 48.912C54.2888 38.4329 64.8604 30.7535 77.0453 27.1766C89.2302 23.5996 102.278 24.3454 113.976 29.2873C125.673 34.2292 135.3 43.063 141.223 54.2902C147.146 65.5173 149 78.4465 146.472 90.8845C143.943 103.323 137.188 114.503 127.35 122.531C117.513 130.558 105.2 134.937 92.5008 134.925L92.4851 134.917Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_50_804">
          <rect width="1000" height="159.905" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default Icon
