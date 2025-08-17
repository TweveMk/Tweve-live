const mainLogo = "https://i.ibb.co/1t83h0Dn/x.jpg";

// Logos maalum
const specialLogos = {
  "Sony Max": "https://i.ibb.co/tpnRRNfn/x.jpg",
  "Sinema Zetu": "https://i.ibb.co/yFyd9pF2/x.jpg",
  "Azam Sports 1": "https://i.ibb.co/B24B9Qvp/x.jpg",
  "Al Jazeera": "https://i.ibb.co/Jwd8zGXb/x.jpg",
  "Azam Sports 4": "https://i.ibb.co/BKgbYmg8/x.jpg",
  "Wasafi TV": "https://i.ibb.co/LDXL5qWY/x.jpg",
  "Azam Two": "https://i.ibb.co/9HzfkSh7/x.jpg",
  "UTV": "https://i.ibb.co/1GjLZkq2/x.jpg",
  "Azam One": "https://i.ibb.co/NdR0tdJz/x.jpg",
  "Azam Sports 2": "https://i.ibb.co/5CB8LHv/x.jpg"
};

// Base channels
const baseChannels = [
  { name: "Azam Sports 1", url: "https://tvhydra.com/live/Senan/Senan123/558844.m3u8", category: "Sports" },
  { name: "Azam Sports 2", url: "http://front-main.eagle-4k.me/live/9fshhuw2z7/54hw7lwwb1/262955.m3u8", category: "Sports" },
  { name: "Azam Sports 4", url: "http://front-main.eagle-4k.me/live/9fshhuw2z7/54hw7lwwb1/1285333.m3u8", category: "Sports" },
  { name: "TNT Sport 1", url: "http://filex.tv:8080/live/zulfikarsh01/000576/495258.m3u8", category: "Sports" },
  { name: "TNT Sport 2", url: "http://filex.tv:8080/live/zulfikarsh01/000576/495259.m3u8", category: "Sports" },
  { name: "TSN 1", url: "http://212.102.60.231/TSN_1/tracks-v1a1/mono.ts.m3u8", category: "Sports" },
  { name: "TSN 2", url: "http://212.102.60.231/TSN_2/tracks-v1a1/mono.ts.m3u8", category: "Sports" },
  { name: "TSN 3", url: "http://212.102.60.231/TSN_3/tracks-v1a1/mono.ts.m3u8", category: "Sports" },
  { name: "B4U Movie", url: "http://front-main.eagle-4k.me/live/9fshhuw2z7/54hw7lwvb1/138693.m3u8", category: "Movies" },
  { name: "Nina Movie", url: "http://front-main.eagle-4k.me/live/9fshhuw2z7/54hw7lwwb1/1102783.m3u8", category: "Movies" },
  { name: "Sony Max", url: "http://gjntpkk.leadcool.xyz/live/2731921600/1135460737/191462.m3u8", category: "Movies" },
  { name: "FXM TV", url: "http://tvmate.icu:8080/live/7686199/9576982/10260.m3u8", category: "Movies" },
  { name: "AMC", url: "http://tvmate.icu:8080/live/7686199/9576982/18925.m3u8", category: "Movies" },
  { name: "HBO", url: "http://tvmate.icu:8080/live/7686199/9576982/46713.m3u8", category: "Movies" },
  { name: "HBO Comedy", url: "http://tvmate.icu:8080/live/7686199/9576982/17773.m3u8", category: "Movies" },
  { name: "MBC Action", url: "http://filex.tv:8080/live/zulfikarsh01/000576/296265.m3u8", category: "Movies" },
  { name: "Sky Cinema", url: "http://tvmate.icu:8080/live/7686199/9576982/35254.m3u8", category: "Movies" },
  { name: "Sinema Zetu", url: "http://front-main.eagle-4k.me/live/9fshhuw2z7/54hw7lwwb1/262952.m3u8", category: "Movies" },
  { name: "Show Max", url: "https://drive.google.com/file/d/1qPAeFr1gVVPeKvxf7WN13vmTVez4tzt7/view?usp=drive_link", category: "Movies" },
  { name: "SyFy", url: "http://tvmate.icu:8080/live/7686199/9576982/46685.m3u8", category: "Movies" },
  { name: "Al Jazeera", url: "https://live-hls-web-aje.getaj.net/AJE/index.m3u8", category: "News" },
  { name: "DW", url: "http://gjntpkk.leadcool.xyz/live/2731921600/1135460737/176619.m3u8", category: "News" },
  { name: "Wasafi TV", url: "http://front-main.eagle-4k.me/live/9fshhuw2z7/54hw7lwwb1/1164799.m3u8", category: "Entertainment" },
  { name: "UTV", url: "http://front-main.eagle-4k.me/live/9fshhuw2z7/54hw7lwwb1/1285337.m3u8", category: "Entertainment" },
  { name: "Azam One", url: "http://front-main.eagle-4k.me/live/9fshhuw2z7/54hw7lwwb1/262954.m3u8", category: "Entertainment" },
  { name: "Azam Two", url: "http://front-main.eagle-4k.me/live/9fshhuw2z7/54hw7lwwb1/262956.m3u8", category: "Entertainment" }
];

// Extra channels
const additionalChannels = [
  { name: "Sports TV", url: "https://spstr.abntv.live/hls/psstream.m3u8", icon: "https://img.freepik.com/premium-vector/soccer-television-logo-template-design_316488-547.jpg" },
  { name: "Dodoma TV", url: "https://goliveafrica.media:9998/live/625965017ed69/index.m3u8", icon: "https://yt3.googleusercontent.com/tlIkQ73h3Zj3-ruMpfgCjvFyWJ6o2fUX7vMwU4omL4iTnjTUuSkK0n0c1XVVT_9MINuUuQlpXg=s900-c-k-c0x00ffffff-no-rj" },
  { name: "Romanza+", url: "https://origin3.afxp.telemedia.co.za/PremiumFree/romanza/abr_satellitechannel/satch_romanza_360p/chunks.m3u8", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Romanza%2B%C3%81frica_logo.jpg/250px-Romanza%2B%C3%81frica_logo.jpg" },
  { name: "1KZN", url: "https://cdn.freevisiontv.co.za/sttv/smil:1kzn.stream.smil/chunklist_b480000.m3u8", icon: "https://starsat.co.za/wp-content/uploads/2023/08/1KZN-TV.png" },
  { name: "CapeTown TV", url: "https://cdn.freevisiontv.co.za/sttv/smil:ctv.stream.smil/chunklist_b480000.m3u8", icon: "https://capetowntv.org/wp-content/uploads/2023/01/cropped-Web-icon.png" },
  { name: "SABC News", url: "https://sabconetanw.cdn.mangomolo.com/news/smil:news.stream.smil/chunklist_b250000_t64MjQwcA==.m3u8", icon: "https://yt3.googleusercontent.com/x5Bgc7UBYZvOHvp3UG91lZbV6ND0YCOi2a026vLPDGIU5GF2qp5JnHnCeLyPegWhEjM5njpN=s900-c-k-c0x00ffffff-no-rj" },
  { name: "Soweto TV", url: "https://cdn.freevisiontv.co.za/sttv/smil:soweto.stream.smil/chunklist_b480000.m3u8", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIRfIk1qiekejwXNifTZCXGm0hS1cLmxiqg&s" },
  { name: "Sport Connect", url: "https://origin3.afxp.telemedia.co.za/PremiumFree/sportsconnect/abr_satellitechannel/satch_sportsconnect_360p/chunks.m3u8", icon: "https://sportsconnect.uk/wp-content/uploads/2024/04/Blue-Modern-Geometric-Initials-X-with-Home-Real-Estate-Logo-6.png" },
  { name: "Al Jazeera", url: "https://live-hls-web-aje.getaj.net/AJE/index.m3u8", icon: "https://enjoysurfing.online/wp-content/uploads/2025/03/images-6.png" },
  { name: "Always Funny Videos", url: "https://apollo.production-public.tubi.io/live/ac-afv.m3u8", icon: "https://enjoysurfing.online/wp-content/uploads/2025/03/images-7.png" },
  { name: "Afro Sport Nigeria", url: "https://newproxy3.vidivu.tv/vidivu_afrosport/tracks-v1a1/mono.ts.m3u8", icon: "https://imagecdn.websitebuilder.prositehosting.co.uk/15/c0/15c0fb9b-b930-48ff-8d8b-d967dde48a93.png" },
  { name: "BBC News", url: "https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/t=3840/v=pv14/b=5070016/main.m3u8", icon: "https://yt3.googleusercontent.com/v4JamQ9B-PUiJHjmZQs9UwTaoLQW8vijJMMpV5QvA2wHQ6iwWM8Q1s6O4jgTl0dtDigVWAi7SA=s900-c-k-c0x00ffffff-no-rj" },
  { name: "Wild TV", url: "https://dfhsahpa45kk2.cloudfront.net/scheduler/scheduleMaster/476/variant/22100055.m3u8", icon: "https://yt3.googleusercontent.com/ZBZVBI42wYc6U1UTNnIkdjrdtB1WKUeAXDhbTwvDk8zjbeGIvMmdxAHOtzOzC75wHtITnqvSGw=s900-c-k-c0x00ffffff-no-rj" },
  { name: "Love Nature", url: "https://fl1.moveonjoy.com/LOVE_NATURE/tracks-v1a1/mono.m3u8", icon: "https://blueantmedia.com/wp-content/uploads/2020/01/brand_love-nature.jpg" },
  { name: "Arryadia", url: "https://cdn.live.easybroadcast.io/abr_corp/73_arryadia_k2tgcj0/corp/73_arryadia_k2tgcj0_240p/chunks_dvr.m3u8", icon: "https://yt3.googleusercontent.com/ZvdsfeYl_U-N1ECyfqJPWYYswIc9eHE6sVd2qP5sPq7cq0hm401BE_H6RYlju3V1juC9p_Cl=s900-c-k-c0x00ffffff-no-rj" },
  { name: "Bloomberg", url: "https://bloomberg-bloomberg-3-br.samsung.wurl.tv/manifest/92ebf7f86a6f6e0663f032358ba58cd1.m3u8", icon: "https://m.media-amazon.com/images/I/31Ja06sm51L.png" },
  { name: "Boxing TV", url: "https://1180885077.rsc.cdn77.org/HLS/BOXINGTV_v0.m3u8", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3RyYjwVRpBZ0clJiWO5ZYlwLzJryHHpKT3Q&s" },
  { name: "Disney Channel", url: "https://fl5.moveonjoy.com/DISNEY/tracks-v1a1/mono.ts.m3u8", icon: "https://yt3.googleusercontent.com/NyNEDUf6vZUw91UA78V8mbKfalM9ufJ2laC5FmPkofOAA6fW9aXRJvOEfeIUkAEI41Yax0xA=s900-c-k-c0x00ffffff-no-rj" },
  { name: "KIX", url: "https://streams2.sofast.tv/v1/manifest/611d79b11b77e2f571934fd80ca1413453772ac7/06862a07-6a92-4b4d-abc3-5fea131713b5/42a1946c-9002-4b2b-b0cf-ac5a54946f7a/0.m3u8", icon: "https://enjoysurfing.online/wp-content/uploads/2025/03/unnamed-1-1.jpg" },
  { name: "MR Beast", url: "https://apollo.production-public.tubi.io/live/ac-mr-beast.m3u8", icon: "https://enjoysurfing.online/wp-content/uploads/2025/03/MrBeast-Logo-1.webp" },
  { name: "NBA TV", url: "https://fl3.moveonjoy.com/NBA_TV/tracks-v1a1/mono.ts.m3u8", icon: "https://enjoysurfing.online/wp-content/uploads/2025/03/images-8.png" },
  { name: "Korean Movies", url: "https://ec3b4b7e.wurl.com/manifest/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X05FV0tNT1ZJRVNfSExT/348da8bd-839c-4e5e-ac5c-d053218f5fb5/2.m3u8", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwchmh5a03i13DkiCJzSL90CfAs0kxdcjPw&s" },
  { name: "NFL Network", url: "https://fl3.moveonjoy.com/NFL_NETWORK/tracks-v1a1/mono.ts.m3u8", icon: "https://static.www.nfl.com/image/private/f_auto/league/khjxu70iiu14uvxridek" },
  { name: "NickToons", url: "https://fl1.moveonjoy.com/NICKTOONS/tracks-v1a1/mono.m3u8", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6XxsgaPOn4kMq2LBgifIWwPIw7zBG5b4yw&s" },
  { name: "Racing America", url: "https://livetv-fa.tubi.video/racing-america/playlistR240p.m3u8", icon: "https://yt3.googleusercontent.com/KJ6In-ckR9EEZbwwujO2SHG55NW3zb9RFPidkfk63yISw62kYIz_4R2QD6tN2jPg_x56m4tBhXQ=s900-c-k-c0x00ffffff-no-rj" },
  { name: "Yahoo Finance", url: "https://d1ewctnvcwvvvu.cloudfront.net/240p-cc/index.m3u8", icon: "https://enjoysurfing.online/wp-content/uploads/2025/03/images-22.jpg" },
  { name: "CNN", url: "https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8", icon: "https://cdn-1.webcatalog.io/catalog/cnn-international/cnn-international-icon-unplated.png" },
  { name: "Africa 24", url: "https://edge12.vedge.infomaniak.com/livecast/ik:africa24/manifest.m3u8", icon: "https://yt3.googleusercontent.com/ytc/AIdro_lCoQndMtEMGu-QzZQ7zI-FZeqOVvtaMxQvx9aCBzIJpg=s900-c-k-c0x00ffffff-no-rj" },
  { name: "Gospel Cartoon", url: "https://stmv1.srvif.com/gospelcartoon/gospelcartoon/playlist.m3u8", icon: "https://www.cxtv.com.br/img/Tvs/Logo/webp-l/f0a3c3c7b9a651e847d86dd71bbb5551.webp" },
  { name: "MBC 3", url: "https://mbc-3-usa-ak.akamaized.net/out/v1/8bbfec9446d84c9ea0dfa34edede6db9/index.m3u8", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/MBC_3_Logo.svg/250px-MBC_3_Logo.svg.png" },
  { name: "MBC Bollywood", url: "https://shls-mbcbollywood-prod-dub.shahid.net/out/v1/a79c9d7ef2a64a54a64d5c4567b3462a/index.m3u8", icon: "https://i1.sndcdn.com/avatars-000393801480-ppmlje-t1080x1080.jpg" }
];

// Merge helper (by name, case-insensitive)
function mergeChannels(base, extras) {
  const indexByName = new Map();
  base.forEach((ch, i) => indexByName.set(ch.name.trim().toLowerCase(), i));
  const merged = [...base];
  extras.forEach(extra => {
    const key = extra.name.trim().toLowerCase();
    if (indexByName.has(key)) {
      const idx = indexByName.get(key);
      merged[idx] = { ...merged[idx], url: extra.url || merged[idx].url, icon: extra.icon || merged[idx].icon };
    } else {
      merged.push({ name: extra.name, url: extra.url, category: extra.category || "Live", icon: extra.icon });
    }
  });
  return merged;
}

const channels = mergeChannels(baseChannels, additionalChannels);

// Final logos
const channelsWithLogos = channels.map(ch => ({ ...ch, logo: ch.icon || specialLogos[ch.name] || mainLogo }));

// Create single player (keeps hidden until a channel/movie is picked)
let player = new Clappr.Player({
  source: "",
  parentId: "#player",
  autoPlay: true,
  mute: false,
  width: "100%",
  height: "100%",
  playback: { playInline: true }
});

function showLoading() {
  document.getElementById('playerLoading').classList.remove('hidden');
}

function hideLoading() {
  document.getElementById('playerLoading').classList.add('hidden');
}

// Handle player events
player.on(Clappr.Events.PLAYER_PLAY, function () {
  setTimeout(hideLoading, 800);
});
player.on(Clappr.Events.PLAYER_ERROR, function () {
  hideLoading();
  alert('Hitilafu katika kucheza! Tafadhali jaribu nyingine.');
});

function populateLiveChannels() {
  const container = document.getElementById("channelListLive");
  container.innerHTML = "";
  channelsWithLogos.forEach((ch) => {
    const div = document.createElement('div');
    div.className = 'channel bg-gray-700 rounded-xl p-3 cursor-pointer text-center shadow-md hover:shadow-xl transition';
    div.innerHTML = `
      <img src="${ch.logo}" alt="${ch.name}" class="mb-2 mx-auto border-2 border-white shadow">
      <p class="text-sm font-semibold truncate">${ch.name}</p>
      <p class="text-[10px] text-slate-300 mt-1">${ch.category || 'Live'}</p>
    `;
    div.onclick = () => {
      document.getElementById("playerContainer").classList.remove("hidden");
      showLoading();
      try {
        player.load(ch.url);
        player.play();
      } catch (e) {
        hideLoading();
        alert('Hitilafu katika kucheza channel!');
        return;
      }
      [...container.children].forEach(c => c.classList.remove("active"));
      div.classList.add("active");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    container.appendChild(div);
  });
}

// Movies (download-only)
const movies = [
  { name: "Ghost", icon: "https://i.ibb.co/CK8rY52s/x.jpg", download: "https://drive.google.com/file/d/1OQ32dEF7eQnCtNVnx2M_V3iMqh6jH9p8/view?usp=drive_link", tags: ["HD", "Action"] },
  { name: "John Luther", icon: "https://i.ibb.co/0pbndhSQ/x.jpg", download: "https://drive.google.com/file/d/1qPAeFr1gVVPeKvxf7WN13vmTVez4tzt7/view?usp=drive_link", tags: ["HD", "Thriller"] }
];

// Online Movies (stream URLs) — new category
const onlineMovies = [
  { name: "Deep cover", url: "https://vz-1bb50f2e-8ea.b-cdn.net/6ae044c0-692f-40bd-95c5-0c99ab30f27a/playlist.m3u8", icon: "https://i.ibb.co/TMdkCYhb/x.jpg", tags: ["Online", "HD"] },
  { name: "SuperMan (Imetafsiriwa)", url: "https://vz-1bb50f2e-8ea.b-cdn.net/90a38928-5c11-4526-ba09-02a02b5dbc85/playlist.m3u8", icon: "https://i.ibb.co/zhZY2mC0/x.jpg", tags: ["Online", "HD"] },
  { name: "Off the Grind", url: "https://vz-1bb50f2e-8ea.b-cdn.net/bb20ea3c-7f75-499c-9e92-eb0ac3ae1a2d/playlist.m3u8", icon: "https://i.ibb.co/KpYny5HT/x.jpg", tags: ["Online"] },
  { name: "THUNDERBOLTS", url: "https://vz-1bb50f2e-8ea.b-cdn.net/6f50dd95-476a-489a-9e85-3347c57e5586/playlist.m3u8", icon: "https://i.ibb.co/mCYRvz1Q/x.jpg", tags: ["Online"] },
  { name: "Heard of State", url: "https://vz-1bb50f2e-8ea.b-cdn.net/6f50dd95-476a-489a-9e85-3347c57e5586/playlist.m3u8", icon: "https://i.ibb.co/xKY7mg0m/x.jpg", tags: ["Online"] },
  { name: "SHADOW FORCE", url: "https://vz-1bb50f2e-8ea.b-cdn.net/bde45d25-32bb-44cc-b00b-945ea7423c7d/playlist.m3u8", icon: "https://i.ibb.co/ZpJtxPVm/x.jpg", tags: ["Online"] }
].map(m => ({ ...m, icon: m.icon || mainLogo }));

function makeMovieCard({ name, icon, tags, primaryActionHTML }) {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.innerHTML = `
    <img src="${icon}" alt="${name} poster">
    <div class="movie-info">
      ${tags && tags.length ? tags.map(t => `<span class='badge'>${t}</span>`).join('') : ""}
      <h3 class="mt-2 font-semibold text-sm">${name}</h3>
      <div class="mt-3 flex gap-2">${primaryActionHTML}</div>
    </div>
  `;
  return card;
}

function populateOnlineMovies() {
  const row = document.getElementById("onlineMoviesRow");
  row.innerHTML = "";
  onlineMovies.forEach(m => {
    const card = makeMovieCard({
      name: m.name,
      icon: m.icon,
      tags: m.tags,
      primaryActionHTML: `<button class="flex-1 text-center bg-emerald-400 text-black font-semibold py-2 rounded-xl hover:bg-emerald-300 transition">▶️ Cheza Sasa</button>`
    });
    // Play on click of button or image
    card.querySelector('button').onclick = () => playOnlineMovie(m.url);
    card.querySelector('img').onclick = () => playOnlineMovie(m.url);
    row.appendChild(card);
  });
}

function populateMovies() {
  const row = document.getElementById("moviesRow");
  row.innerHTML = "";
  movies.forEach(m => {
    const card = makeMovieCard({
      name: m.name,
      icon: m.icon,
      tags: m.tags,
      primaryActionHTML: `<a href="${m.download}" target="_blank" rel="noopener" class="flex-1 text-center bg-cyan-400 text-black font-semibold py-2 rounded-xl hover:bg-cyan-300 transition" download>⬇️ Download</a>`
    });
    row.appendChild(card);
  });
}

function playOnlineMovie(url) {
  document.getElementById("playerContainer").classList.remove("hidden");
  showLoading();
  try {
    player.load(url);
    player.play();
  } catch (e) {
    hideLoading();
    alert('Hitilafu katika kucheza movie!');
    return;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navigation
function showPage(page) {
  const home = document.getElementById("homePage");
  const live = document.getElementById("livePage");
  const moviesPage = document.getElementById("moviesPage");
  const playerBox = document.getElementById("playerContainer");

  // Hide all pages
  home.classList.add("hidden");
  live.classList.add("hidden");
  moviesPage.classList.add("hidden");

  // Unset nav state
  document.getElementById("btnHome").classList.remove("active");
  document.getElementById("btnLive").classList.remove("active");
  document.getElementById("btnMovies").classList.remove("active");

  if (page === "home") {
    home.classList.remove("hidden");
    playerBox.classList.add("hidden");
    document.getElementById("btnHome").classList.add("active");
  } else if (page === "live") {
    live.classList.remove("hidden");
    // Player stays hidden UNTIL a channel is chosen
    playerBox.classList.add("hidden");
    document.getElementById("btnLive").classList.add("active");
  } else if (page === "movies") {
    moviesPage.classList.remove("hidden");
    // Player stays hidden UNTIL an online movie is chosen
    playerBox.classList.add("hidden");
    document.getElementById("btnMovies").classList.add("active");
  }
}

// Init
document.addEventListener('DOMContentLoaded', function () {
  populateLiveChannels();
  populateOnlineMovies();
  populateMovies();

  // Close player when clicking outside (optional)
  document.addEventListener('click', function (e) {
    const playerContainer = document.getElementById('playerContainer');
    if (!playerContainer.contains(e.target) && !e.target.closest('.channel')) {
      // Only auto-close if we are not clicking an online movie card either
      if (!e.target.closest('#onlineMoviesRow')) {
        playerContainer.classList.add('hidden');
      }
    }
  });
});