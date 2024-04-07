import Konva from 'konva';

const stage = new Konva.Stage({
  container: 'app',
  width: 480,
  height: 800,
});

const layer = new Konva.Layer();
stage.add(layer);
