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
  xScrolling("scrollContainer3");
}

const critically_series_data = [
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZozzIT6Q0pVlthNws4VrbZeIKWGfV6eWcP4YVbwVVEMzeuY2bSeoB6nKamHfWzvrJp1drx1qIEdvSbBTLUN0n3veIE2IPUG5q4.webp?r=bd5'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVOHcpzaafmWUCkuvJwu8Bw1ysqucnutAp8Ov1PXP_PUV42y18hCyZt6rb2onkSzvGQToP_qSyL0N-Q9gXiMRm5pg3H6eFXAHsLvcjcqOO41S1Yx0co-JmK-UsFn1wnB6d0l.jpg?r=31e'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcGJKEfGPNgTgTQ7YCrb_z8Tk5Q1jSzIhU2avAglfC8Mtg8rtKipwDcZFwE6ekCv7ciIGxvHbPnowuqAI2yt0diTukWjydfvmZI.webp?r=b72'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYTCT54knS0CeLgTEzNg5XKttTOwIt882qm_ZMrf16t3sv0UJB_7zsBMnGorF6zjqGCjQurH-gMZlT4tbTv5b9rE3azeh7RAEUfivFqfHAZHF5eSHOfoMn5imUqgKjkm7R_nMijmQwrxOBR1oP5-faUPoDvJh_IwEQPC8Elbdb9RR4306SjrCucGUu5YuF-RlhZflXrG6Ly4seHxGauhbxvZd5p2I05CqAgH2qSAs0fqsMI0jdMNsXYoGfa66GXuutl2hGS0Nl1crHQcR2uxu01gUw.webp?r=d42'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcJEsG8tv71DqEGgGZiVa1rZmqC6GQfpkGsAGgUHHthlQbCOL15YlkJZP2X1amI3lRb5VGyy6aJ_jWwmMDDqQJElQ817D340fRo.webp?r=8c3'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcI82BDQ-Lh6WW74-1-VAmj-ZzbYYotXq7GVDiCdu7hhcBdYxaemF_WK-AGSr1a6P5W6ASSrhu-mYQwR1HCuKtd6GEsERPGxPSw.webp?r=1c7'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABesA46VIFwtg7gDBiMXvPr_AH3bRusSGxi6r87hRL_I0WVah239DGT8W04G2tB9B9tuo3XbSVQmI0aLKRauzTNIp1ixu5fVgo0g.webp?r=2a0'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXHQ4Rtwtgv42_SrEqZAsZxBxpX3YAt5ARtyy97w2zYVT4yR1ch7QOGFtkpDH-vGZxNFpJ2CUdGUzsqhC3xCt1oLKN9E5mdjzBI9W623wrewby4gfiZAbcQOOFyYYochmqpz.jpg?r=807'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTUwnavi_0kiOSJtPWE9adabX9OM29niecI21O-g5fPNQ_NvFwlu4B42FXcsbQKG_eWy1KxHJ80hbgEewLMyykAL_TaEYr3OkFI.webp?r=447'},
];

const top_10_series_data = [
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABfK91p5J13nnZol16KKfQVgGGVJTuy9BjikJnEotefhgrnkwKilI_efgDmEgo_TOk_yqQCWLOsiq7XCalofYkao_xZwblHqkbZ8--q3Pq_KuXupMHl_6mJ0_x0ecH7cDyDMZIAvXZLQ6HbS1kbAqRhbTTC0c-N8Ped5_BHAqY_pE6urHNOww0D8Pu4GxRP1s-J3JtTnKfJsjZi6KWf2hgLud7a564z2eF5-O5fJqHJWKbBMRZYwfKkhqBrSWZibkvKKoLoCE1-_3QeOZDnhGHHPLMwnXETKzRj79n37jVTknM1W4i76rBmWvsQ.jpg?r=120'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZ3W-ZA0UlMR607r-My2YG8ks5V_CJcByoqQzEc38PrGOru51hTG-_A5c7bb5LKlW4OQED6WocjS05QG5I0FLV2LJ15dDaGomZ_kYriKWmQV1CqrfzGiC1wxPcqU8k48uI94Ew.jpg?r=568'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABXr72tG9ebl5IGJN4x2HAhDdRzU0ijeiB1zIrfzzVI-sN4cdGhLVq_xS0-3nuvP5g9oR0LZ1MTHp5HMlNDVo76bjRjSQqLRNyMxmBWY-g3KQgY4gnAluRPfQP0OIzZywXeldyIgEm8CT3pSeu1YCq5MKq5R1pe_RZB8pwq4Xossxrd0Z6435qharTtH8YMTaAaR3qeZV57iKXAoAd7KihF_uNeSJiHLRV7oqLtqpOBAklKwKleDl1JTJ30VajMc50bormC5NumyYYq0LDJFfSNvTBuiVPj4G7qdP-sgJO4S4UkqFNiARLXbEag.jpg?r=63c'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSgP6Xf3xMtm-ivpIvSlz4UUEBk8zKvAUivPVHfwPVJKigsUuIlD_VaLF4t_oiegmOQJA-oLBQb5e2DUXelzxe8uxErfJaoMHli6qBUCt9pVFxy5NxI6D_zpX0eVfCwTXcIZVw.jpg?r=f94'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABT238QxvT-PGRvbGueSA4Hi02DP9XHsKciMMa_zuQOjB2Mw6y_AxkzTxQu-NCY7PFfIYSy7a5i3EpGUgY8lc4t4VMXKXl6tPHXfMl_I_plNJurB61I7OxGE8OtAzZeUgC2kQZF1Z9qwxLq1oC6cwfUqqLpK3KeELkMuwB6cHbd0iMJtiqDqu0QR2N4_gH1T_NrN3NNO1cNatTCca7Bh1yc1QpLEDsNWcw6uarqc0aeXoVduAY0WvbzYiW-9oIKocZ6Cljdyz6VPzfyMm4NHXn8Arkon_yzNIxHPKu5JMMkJTTWlvNILU.jpg?r=7c7'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABVgTM5Xm6sVvmVUwRocMtBXYTINUFl-1bGhRxmcs8K9HGv8d9UUWcY8lW3f5bNVQCNQceFzpl44kbfFXzEMC5sBDlKISXkH4MOiM519HRIXVh99pkKwwycv_ni1-Go03yoSaeKHvohLCtt9kIW8oz3sOqn-gI7T6iqgd9c3rlPLwfYHxkes3iEWIwu96SP3KHVG5gWY8htiD0cU7y0TMSg7Ba8-PU1jDJLS7wSYaNXQKLO1iRfArb9AL2qUiR9ckzyhkV6KjbiLW8W__XGfvtAPzh8KcOpCwN4FKx9ozKf5SX5zZOdMoc75JHg.jpg?r=b67'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZWJQzyfOpzX24VoznAz7XIcmd7-CQDZ_fhfwKbZz4-BBXnXDEq6dALEZoahVEjDunUS4Rfcio7Ts-yRrizgo7hEJjLIUP95L0WI7726UnKLbMVF-xftoyazW84Os3X77OQQzO_9imOM-Z7D7Ab2HPREXuXcLCkzsxPzNzXmVMML6PxRcMEOU_NI5BmrQbgmFZK53epZFRmMfSmHVXSRSBjQYtiETU94Bjhr4Jq-VgWv9vuA3ycxragug2v59naOTcbLu_XmzlnH1s76e6d5J9YpitzTm6ig1AmG-WIzJ3bZz0Gl_g1ccl2Big.jpg?r=2fb'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABfHXOYLlY57qsq6vPccrhySu7CmtdfVTPaQ6Ck7_LnvrzN3zYdVUy75emO1XyFfEcidVDfzzBujm35A4S4sDDK1nQOVU_rxyE6jO2LT2al-RSX5l24HpJ1ElO-E6s3W3ft2PjpFSE3TuqR3555ytwAApKe182lFs_ADW1QxyY7dudf_mKw4g_VFvBBbfeEPGCT1543vIVXvJqeoNH2Q5Sxo0FAVYPPGqGA9Q6oOZZrqiLqlnjs8-5Kx8JR7qaJNaoXw9-ZIq5W1F6dKGc14yTFJJgfO2QT4-2WXLfvSyaJKkgFuJ0qvu10ESUA.jpg?r=384'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABcelYvm1dMet_fxjjABNZNFMw76gbQJztqeNFmOaY-ZcpIu14eE0OY4KMxe2Qta2RXPTh3pq0Cd9uEl2984XOyojhlgmbJsx3YAKGgGzTUtKMjWuMz3nLiaNBFdlHHZz1qzZ2M4AQFb0OUxwEkRuhXSfO3oGUSJBEWaqZylP-qiCABV7Qcsvdz52eJZnWHCDrGPIhytCtabXAjtD6Vz4sNulrsiDNzWWzaKPvPOZXH8zMT08rfIlaYoswqxxH9odYbE6yMCi7kD35jI81cLH6E4zKc0yX67XOlu5BfpX4kYOQKSDmCsdfhEv7R_Ki94lppZDwbV5HLuu0fZKglLAdwZbwxrf08Cne10vqegTkt5OhunXoX9WPHzqh9pwvoTE9B58xgxUzhctscIHgJfOtPVTErt1puE6cdTLi-LG24NUsc05RRCdDcOaUtLn-4YXnKi2DrHN5g.jpg?r=b56'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABd1FvcnXzOhYzgU2xSzuIzsu6-Vp29wwv3xGmJWiBIcRSI_z8XKkhopZX240HCMtvXzpEoj-IrKjeCCZ9SL9v5GjF086fqAVudUzbBjkPDkGrKBu-Bml0lciwe8b1VRLiEdtG-fyMFXYfDHdCBBlkTy8YVCNoDkkCu4O2XnwS0FgGQhWg-T-gsoDI7Is1cVHcrDZiq1P6sRVEeTZK86h3vHZbERXzVyfAYMTsIPKOD078ieyFL_4s9pQyLOvK_VRwDdV4EMD-7e6anyDoFQxX7c31l1KOQ.webp?r=bf6'},
];

const top_10_movies_data = [
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRpFITR1vyeCurS_LFiKVINlIPnPD91Cs7YGclAN7ov2dlFfYJOLQEGWsmYsfnVxbwlsqd2fIGfgKOaKVPwhMHL-_7m8eVT1uW5Bks1xC2YWXmZxGdjVOfEj0C1Nby7kMNtaJKB_8CS1EKZVgjTq_7a0itpzv4vYcdDbp2co387_YOOplp0w0ZYdS2ndTqYPrNvRGm93L7DAWQC-qhOHSXgOZrUa46IDD6wQHhGIDW9mj0G3JYkoZXMGAjMdnlDFyPeWrG77IsrFWaQ0WUanJwDQIzAREl1prEj06uNMoCqI5xVkAvaef9VhMg.jpg?r=db0'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZ-Drat9GLc9dl-5QVRjXtbbTi7B99jEr2cuz1ZzjrvFIRwMm26M3j7AoASeG4QzADWOC2iIJMMXM6Zd_BqBcG2hFjqii1X9mRFUzeT4TSodn49bLPsyef23bvX0CaYo7GK05hm09CgVtAltX-JW5QYOJiJMexR3S2PmdigLb0td9k2TQzSmRTl5bXWT-0NTgvQje-59p6D5kvv96hlvsn535TsqFHTO6OYxvtIY2F1E95k0Vci-YEMANxRK40NkRFx9i_wAIwDKwFAuiwys4L7wP0W9cQ.webp?r=106'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABXEY87DTj0L_4BPNp01WgYPZGY3rre-3rS7vz0JfdnWLYhXpNe8MfIXuOTXLGrWIUGwIw07e1Nh3Sy2kPwKPcMBag374w7MfuJMX-HabAtBOicS3dbRnS77qVJhgjOeQImdNLl6mU9qHxrMBfzoEEB5AxUi6QMbo9f0w_emqUfCeocVMZEeaaNZBPdmg72dMaPtJrRyl2e9ygj9NOp6uYcpC3L4tOz9VGWl_nyEEN9M31FbzpcZFCxmwtBkYriscP11kRCHwcO3WujU56UnpWOQNcFOpMw.webp?r=f17'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABWW3EjGRcNu5a1T_7jevM_BPR3zb-GdXdABpJZ_mPOYp_hb3a7diPBru6wYmrlHdlUqgza4Yi_WrHyMngm1eBBXqwTmv-vgYMw1RLd1_7wAu0Tb_qeajau3yAotHgOGCA4DNYY7bf2QkyXRZTPxQvl8rlNUuJFchaeXpGyaba5XapXvERAK7gqub7t_iQfC2sOAi-dHv_8ERcjVSZcd45mW8Gj1nGtkWHOUvpm4HSnytM3htM3GFkD06ed99R_Uof-xNcuK8mHKg3MUumk8PPQ_6VhCYfQ.webp?r=d5f'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABYWbe4tgBU3Orm5QOgb2TMNXAutCWDjz2HFISheEeL7rTNfaEu-BkZtsWKfJ-MOq7-9UhgEgz5ES48I_-MM0TGKtcamjzR72otzbrUlpMZ5brjSZVnMPz7pZdbTEubJG_eT-wBJ-S0B2_qsu3v37kWb1tjbS8dFbMB97_sYG_yOT5yreguyETZ3PajEBSY4L4xWbcP5XOkr-2JiOgGOCPKeqsFJHyeLrpe4SB2NhaBZGSgiI-eF_4n0QjJTi94l70SyIYCpLsaOkKLGj86UZ-zZYRxHBYw.webp?r=830'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABapn5Lfh61Y63DozGPVO5ublIL8rqTzesWmtzMQ3nZ7ri_fotjQSDp6s-mUJ1VQ1OPg2OuCvPCntc8kGysAdBvpjVbtHt3ApJ8QA-0ppXuL43lB-Qh867e4dPRrOyrWXQN9T8CWrWsMuHSdcELJqKQsYO9vvmelrKL75TbJcwfRIbxdo69y4Dv1FlB72gzLxziIYoWAYtO_c9o7sZar1ZM8XfRSnJBapUrs5oGEBDkQsQ-ddh23dbeNUPBIWpFQQmztkj232stV5dWRFrggsrCyNSxb2Z3zGEHt-gux52UY1YVs-FqOiraMLMA.jpg?r=8be'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABbNE2Ku-YAT6nTgVSkEPBoi7CBCl2ach9nOEVY8ov8YmoSxkq3E_3GfwGpf2dYJXncOS57BYWb5DNVZfbkgJy3QKpbi0jthKztLqYHyhpDP8yNqT4hpcHP-8A1L6q50XywArnzb22XA3QYXM5Uy0yWv0mMm5nVLB_hlO3DZHUb86QhNkExoEpfcitkV06KmEB5qFYXFXtlm03IPJdCX9dJhdQIN03u7FxHgI4qC3lPs0Zpf0WOBMABBv6SzsuPgV0KTsC4NHvZ2c_KyOLGUT9XqaatMvxiIa62oKP1HP9UpuDW2JtaIwvoEoMg.jpg?r=1f9'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRAPDEKm1nqgH6-iO1ga6EA3E0wSpV8N7zbgv5FDQ0eHQYZ9QiTI4LA_SFmRPbQ6Ap84buC7q-a3UJiIMl2RrI0Ubmcn_eBtaU9kFUbwZ-WvNM-lTeTj1tpjzjWPPvrg50b7hU2w9ZE8NoXS_0JETSl0ptLX4LCpkgCnBTFmzTsFq1qRpWnyXb7RM96kmXBi4yk7CnmSrKtl5zHHr6dsOYTOYHbe3yubePcMeWey5U8DtulQejR4gzDRzcbqfB5ZQdRNsdNoE56tZ7WeyQQKu8wQiavJOaBLnbYGMJJEvHOVlTfWRI8pHAywXQ.jpg?r=80c'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABdBFB1BRZsAnSA6rWXdDNqRpzQvurZok0AM0Bu9ewwvc4G-P6vMy1nvcq6JU9opUuHRmvbQza_w91s7_TByUeGtwJIA6gPUvI6Ywmx-BRHOl1ZBa1b6IeUb-gauUT7SR-7A3dA4U-fLp4haWJR_Ga_BJ2aQn9iMVd_9s_Rn3dVBrAG0ub3I17ZH0BGhqC8eQBebXaBAum0kZ5_eOr5BeAHaBG7s42xRgHcGk-SpkS8UG2_1IVo8UGiSCOltHU4yn61_zq5i1IHhDngU1rj93V05bEa4_bg.webp?r=699'},
  {image: 'https://occ-0-3437-2706.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABa0mTb2vxMf20kRdpSqE-JZi0rgIA4Ti5gm_mIz6UtptoerFlSxmo7_RiHxVm4RS8S8nVuL6RhfRCbHjz1iKRAqPbGtdtlx7dSK6uHjF8kC43A0DH0U3mLH1IODV6ExMh6bbwgrWnfpryAUWWBJl5fk_MQ5uU8k5w8Pq8P7UvpYBs0fdSYAbRzJTnD-dYlglfhkzNc7NVD1fYUvFIYjNEN_Wv9iWu2Vc0SV2Fnxo_qFWp9_uOOD3XMwjElUO-VNOz4iq_jpx0uojJ0wRpmaQwnRF_s2AVA.webp?r=0ec'},
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

const top_10_movies = document.getElementById('scrollContainer1');
const critically_series = document.getElementById('scrollContainer2');
const top_10_series = document.getElementById('scrollContainer3');


critically_series_data.forEach(item => {
  createItem(critically_series, item, 'item_16_9');
});

top_10_series_data.forEach(item => {
  createItem(top_10_series, item, 'item_9_16');
});

top_10_movies_data.forEach(item => {
  createItem(top_10_movies, item, 'item_9_16');
});

