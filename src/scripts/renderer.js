const info = document.getElementById('info');

info.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const send = async () => {
  const res = await window.versions.ping();
  console.log(res);
};

send();
