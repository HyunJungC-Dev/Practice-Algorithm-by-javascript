function solution(record) {
  const messageOrder = [];
  const nicknameDB = {};
  for (let i = 0; i < record.length; i++) {
    const [query, id, nickname] = record[i].split(' ');
    switch (query) {
      case 'Enter':
        nicknameDB[id] = nickname;
        messageOrder.push([query, id]);
        break;
      case 'Leave':
        messageOrder.push([query, id]);
        break;
      case 'Change':
        nicknameDB[id] = nickname;
        break;
      default:
    }
  }

  const result = [];
  for (let i = 0; i < messageOrder.length; i++) {
    const [query, id] = messageOrder[i];
    const nickname = nicknameDB[id];
    result.push(
      `${nickname}님이 ${query === 'Enter' ? '들어왔습니다.' : '나갔습니다.'}`
    );
  }
  return result;
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan'
  ])
);
