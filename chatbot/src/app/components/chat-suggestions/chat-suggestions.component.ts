import { Component } from '@angular/core';
import { QuestionComponent } from '../../icons/question/question.component';
import { CommonModule } from '@angular/common';
import { CuriosityComponent } from '../../icons/curiosity/curiosity.component';
import { HistoryComponent } from '../../icons/history/history.component';

@Component({
  selector: 'chat-suggestions',
  standalone: true,
  imports: [
    CommonModule,
    QuestionComponent,
    CuriosityComponent,
    HistoryComponent
  ],
  templateUrl: './chat-suggestions.component.html',
  styleUrl: './chat-suggestions.component.scss'
})
export class ChatSuggestionsComponent {
  suggestionTopics = [
    {
      title: "Dúvidas",
      icon: 'doubt',
      questions: [
        "Qual o valor para entrar no museu?",
        "Quando o museu está aberto?"
      ]
    },
    {
      title: "Curiosidade",
      icon: 'curiosity',
      questions: [
        "Quem era o prefeito na época da criação?",
        "Quantos cômodos existem no museu?",
        "Quantos peças estão exibidas no museu?",
      ]
    },
    {
      title: "História",
      icon: 'history',
      questions: [
        "Quando o museu foi criado?",
        "Qual o estilo arquitetônico do prédio?",
        "Quantas peças estão exibidas no museu?"
      ]
    },
  ]
}
