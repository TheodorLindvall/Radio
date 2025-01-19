fetch('http://api.sr.se/api/v2/channels?format=json&size=100')
    .then(response => response.json())
    .then(data => {
        const channels = data.channels;
        const channelsContainer = document.getElementById('channels');

        channels.forEach(channel => {
            const channelDiv = document.createElement('div');
            channelDiv.className = 'channel';
            channelDiv.style.backgroundColor = channel.color;

            const img = document.createElement('img');
            img.src = channel.image;
            img.alt = channel.name;

            const infoDiv = document.createElement('div');
            infoDiv.className = 'info';

            const h3 = document.createElement('h3');
            h3.innerText = channel.name;

            const audio = document.createElement('audio');
            audio.controls = true;
            const source = document.createElement('source');
            source.src = channel.liveaudio.url;
            source.type = 'audio/mpeg';
            audio.appendChild(source);

            infoDiv.appendChild(h3);

            channelDiv.appendChild(img);
            channelDiv.appendChild(infoDiv);
            channelDiv.appendChild(audio);

            channelsContainer.appendChild(channelDiv);
        });
    });
