import React from "react";
import{Carousel}from 'react-responsive-carousel';
import './App.css';

function Landing(){
    return(
        <div className="body">
        <Carousel showThumbs={false} autoPlay infiniteLoop interval={2000} showStatus={false}>
                  <div>
                      <img src={`https://nx-cdn.trgwl.com/Images/banners/home/pp-nexus-sweet-bonanza-desktop.jpg`} />
                  </div>
                  <div>
                      <img src={`https://api2-fa7.tr8ngames.com/images/id_cbd_714c17d4-ae63-4941-b386-e542973be6ea_1640355233030.jpg`} />
                  </div>
                  <div>
                      <img src={`https://api2-fa7.tr8ngames.com/images/id_cbd_7931b48d-44e8-4b1a-a1d4-cd25a355d33b_1612248817453.jpg`} />
                  </div>
                  <div>
                      <img src={`https://api2-fa7.tr8ngames.com/images/id_cbd_f243f73e-b759-4524-8ef3-e923ac1589dd_1612248877590.jpg`} />
                  </div>
                  <div>
                      <img src={`https://api2-fa7.tr8ngames.com/images/id_cbd_33b002ba-5d8c-49d4-b69b-7c977289ada3_1612248924813.jpg`} />
                  </div>
        </Carousel>
        <div className="contentlanding">
          <div className="pemberitahuan">
            <div>PEMBERITAHUAN</div>
            <marquee>
              Pemeliharaan Terjadwal Pinnacle E-Sports pada 2022-01-24 dari 4.50 AM sampai dengan 2022-02-24 12.00 PM[GMT+7]. Selama Waktu ini Permainan Pinnacle E-Sports Tidak Akan Tersedia. Kami Memohon Maaf Atas Ketidaknyamanannya, Terima Kasih
            </marquee>
          </div>
          <div className="bodytop">
            <img className="jackpot" src={`https://media2.giphy.com/media/CbwHvwZaf9PFFHSvif/giphy.gif?cid=790b76118af056773cf9e5acb032025eb1520a70859144bf&rid=giphy.gif&ct=g`}/>
            <marquee className="marqueegambar">
            <img src={`https://nx-cdn.trgwl.com/Images/providers/PP/vs20superx.webp?v=20220127`}/>
            <img src={`https://nx-cdn.trgwl.com/Images/providers/PP/vs243crystalcave.webp?v=20220127`}/>
            <img src={`https://nx-cdn.trgwl.com/Images/providers/PP/vs20doghouse.webp?v=20220127`}/>
            <img src={`https://nx-cdn.trgwl.com/Images/providers/PP/vs20wildpix.webp?v=20220127`}/>
            <img src={`https://nx-cdn.trgwl.com/Images/providers/PP/vs20fruitswjp.webp?v=20220127`}/>
            </marquee>
          </div>
        </div>
          <div className="bodymid">
            <div className="bonus1">
              <p>BONUS MEMBER BARU</p>
              <img src={`https://files.sitestatic.net/home_info/1615736730_home%20page%201.png`}/>
              <p>BEBAS WITHDRAW KAPAN SAJA</p>
              <p>KLAIM BONUS ANDA SEKARANG JUGA</p>
            </div>
            <div className="bonus2">
              <p>SPECIAL BONUS SPORTSBOOK</p>
              <img src={`https://files.sitestatic.net/home_info/1615736839_home%20page%202.png`}/>
              <p>BEBAS WITHDRAW KAPAN SAJA</p>
              <p>BERLAKU UNTUK SELURUH PROVIDER SPORTSBOOK YANG TERSEDIA</p>
            </div>
          </div>
          <div className="bodybotcontainer">
            <div className="bodybot">
              <p className="titlebodybot">INFORMASI</p>
              <p>Registrasi</p>
              <p>Bergabunglah dengan BESTBET untuk mengalami permainan yang luar biasa dan menarik. Nikmati kepuasan dengan bonus dan promosi di situs kami.</p>
              <p>Afiliasi</p>
              <p>Menjadi mitra kami dengan bergabung dengan afiliasi BESTBET. Dapatkan penghasilan dan komisi Anda setiap bulan dengan mengundang teman-teman Anda untuk bermain di BESTBET.</p>
              <p>Game yang bertanggung jawab</p>
              <p>BESTBET menawarkan game online terbaik dengan tanggung jawab penuh dan game fairplay. Keamanan selalu menjadi prioritas kami.</p>
              <p>Keamanan</p>
              <p>BESTBET menawarkan game online terbaik dengan tanggung jawab penuh dan game fairplay. Keamanan selalu menjadi prioritas kami.</p>
            </div>
            <div className="bodybot2">
              <p className="titlebodybot2">PRODUK</p>
              <p>Sportsbook & Taruhan Langsung</p>
              <p>Dapatkan ribuan peluang olahraga setiap hari di BESTBET. Kemungkinan untuk olahraga paling populer seperti sepak bola, bola basket, tenis, hoki tersedia dengan Taruhan Langsung setiap hari.</p>
              <p>Kasino Online</p>
              <p>BESTBET menyediakan permainan kasino online terbaik seperti Baccarat, Blackjack, Roulete, Sic Bo, Poker, dan permainan populer lainnya di kasino online.</p>
              <p>Live Kasino</p>
              <p>Main di live casino BESTBET dan Anda akan merasakan sensasi kasino yang sebenarnya. Pilih berbagai permainan kasino yang Anda inginkan</p>
            </div>
          </div>
      </div>
    );
}

export default Landing;