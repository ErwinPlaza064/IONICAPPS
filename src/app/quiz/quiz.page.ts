import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})

export class QuizPage {
  score: number = 0;

  constructor(private alertController: AlertController) {}

  async checkAnswers() {
    const alert = await this.alertController.create({
      header: 'Resultado del Quiz',
      message: `Puntuación: ${this.score}/8`,
      buttons: ['OK']
    });

    await alert.present();
  }

  updateScore(option: string, correctAnswer: string) {
    if (option === correctAnswer) {
      this.score++;
    }
  }
}

