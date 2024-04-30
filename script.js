window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").classList.add("netflix_nav_scrolled");
      } else {
        document.getElementById("navbar").classList.remove("netflix_nav_scrolled");
      }
    }


function xScrolling(containerId) {
        var container = document.getElementById(containerId);
        var isMouseDown = false;
        var startX;
        var scrollLeft;
        container.addEventListener("mousedown", function (e) {
          isMouseDown = true;
          startX = e.pageX - container.offsetLeft;
          scrollLeft = container.scrollLeft;
        });
        container.addEventListener("mouseleave", function () {
          isMouseDown = false;
        });
        container.addEventListener("mouseup", function () {
          isMouseDown = false;
        });
        container.addEventListener("mousemove", function (e) {
          if (!isMouseDown) return;
          e.preventDefault();
          var x = e.pageX - container.offsetLeft;
          var walk = (x - startX) * 1;
          container.scrollLeft = scrollLeft - walk;
        });
}

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if(!isMobile){
  xScrolling("scrollContainer1");
  xScrolling("scrollContainer2");
}



const topWatchedData = [
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZozzIT6Q0pVlthNws4VrbZeIKWGfV6eWcP4YVbwVVEMzeuY2bSeoB6nKamHfWzvrJp1drx1qIEdvSbBTLUN0n3veIE2IPUG5q4.webp?r=bd5'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVOHcpzaafmWUCkuvJwu8Bw1ysqucnutAp8Ov1PXP_PUV42y18hCyZt6rb2onkSzvGQToP_qSyL0N-Q9gXiMRm5pg3H6eFXAHsLvcjcqOO41S1Yx0co-JmK-UsFn1wnB6d0l.jpg?r=31e'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcGJKEfGPNgTgTQ7YCrb_z8Tk5Q1jSzIhU2avAglfC8Mtg8rtKipwDcZFwE6ekCv7ciIGxvHbPnowuqAI2yt0diTukWjydfvmZI.webp?r=b72'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYTCT54knS0CeLgTEzNg5XKttTOwIt882qm_ZMrf16t3sv0UJB_7zsBMnGorF6zjqGCjQurH-gMZlT4tbTv5b9rE3azeh7RAEUfivFqfHAZHF5eSHOfoMn5imUqgKjkm7R_nMijmQwrxOBR1oP5-faUPoDvJh_IwEQPC8Elbdb9RR4306SjrCucGUu5YuF-RlhZflXrG6Ly4seHxGauhbxvZd5p2I05CqAgH2qSAs0fqsMI0jdMNsXYoGfa66GXuutl2hGS0Nl1crHQcR2uxu01gUw.webp?r=d42'},

];

const newToNetflixData = [
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZ3W-ZA0UlMR607r-My2YG8ks5V_CJcByoqQzEc38PrGOru51hTG-_A5c7bb5LKlW4OQED6WocjS05QG5I0FLV2LJ15dDaGomZ_kYriKWmQV1CqrfzGiC1wxPcqU8k48uI94Ew.jpg?r=568'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABXr72tG9ebl5IGJN4x2HAhDdRzU0ijeiB1zIrfzzVI-sN4cdGhLVq_xS0-3nuvP5g9oR0LZ1MTHp5HMlNDVo76bjRjSQqLRNyMxmBWY-g3KQgY4gnAluRPfQP0OIzZywXeldyIgEm8CT3pSeu1YCq5MKq5R1pe_RZB8pwq4Xossxrd0Z6435qharTtH8YMTaAaR3qeZV57iKXAoAd7KihF_uNeSJiHLRV7oqLtqpOBAklKwKleDl1JTJ30VajMc50bormC5NumyYYq0LDJFfSNvTBuiVPj4G7qdP-sgJO4S4UkqFNiARLXbEag.jpg?r=63c'},

];


function createItem(container, data, className) {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add(className);
  const image = document.createElement('img');
  image.classList.add('item_img');
  image.src = data.image;
  image.setAttribute('data-src', data.image);
  image.loading = 'lazy';
  itemContainer.appendChild(image);
  container.appendChild(itemContainer);
}

const topWatchedContainer = document.getElementById('scrollContainer1');
const newToNetflixContainer = document.getElementById('scrollContainer2');

topWatchedData.forEach(item => {
  createItem(topWatchedContainer, item, 'item_16_9');
});

newToNetflixData.forEach(item => {
  createItem(newToNetflixContainer, item, 'item_9_16');
});

