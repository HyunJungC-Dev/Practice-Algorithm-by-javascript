function solution(new_id) {
  let _new_id = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_\.]/g, '')
    .replace(/[!@#*]/g, '');

  let next_new_id = _new_id.replace(/\.\./g, '.');
  while (_new_id !== next_new_id) {
    _new_id = next_new_id;
    next_new_id = _new_id.replace(/\.\./g, '.');
  }

  if (_new_id[0] === '.') {
    _new_id = _new_id.substring(1);
  }
  if (_new_id[_new_id.length - 1] === '.') {
    _new_id = _new_id.substring(0, _new_id.length - 1);
  }
  if (!_new_id) {
    _new_id = 'a';
  }
  if (_new_id.length >= 16) {
    _new_id = _new_id.substring(0, 15);
  }
  if (_new_id[_new_id.length - 1] === '.') {
    _new_id = _new_id.substring(0, _new_id.length - 1);
  }
  while (_new_id.length <= 2) {
    _new_id += _new_id[_new_id.length - 1];
  }
  return _new_id;
}

console.log(solution('z-+.^.123'));
