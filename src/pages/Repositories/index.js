import React from 'react';
import * as S from './styled';

export default function Repositories() {
  return (
    <S.Container>
      <S.Title> Repositórios </S.Title>
      <S.List>
        <S.ListItem> Repositório: Nome do Repositório</S.ListItem>
      </S.List>
    </S.Container>
  )
}