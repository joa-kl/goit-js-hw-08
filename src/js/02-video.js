// import Player from '@vimeo/player';
// const player = new Player('vimeo-player', {});

// player.on('play', function () {
//     console.log('played the video!');
// });

/* <script>
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function () {
        console.log('played the video!');
      });

    player.getVideoTitle().then(function (title) {
        console.log('title:', title);
      });
</script> */




import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlayer = ({ seconds }) => {
    localStorage.setItem('videoplayer-current-time', seconds);
};

if (localStorage.getItem('videoplayer-current-time')) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

player.on('timeupdate', throttle(onPlayer, 1000));
console.log(player)