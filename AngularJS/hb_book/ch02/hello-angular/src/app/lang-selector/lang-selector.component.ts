import { Component, OnInit } from '@angular/core';
import { WelcomeSupportService } from '../welcome-support.service';
import { LANG_METADATA} from '../lang-metadata';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {
  langmetadata = LANG_METADATA;
  langCode: string;
  private welcomeMsg;

  setLangCode(nationcode: string) {
    this.langCode = nationcode;
    this.SupporterService.langCode = nationcode;
  }

  constructor(public SupporterService: WelcomeSupportService) {
    this.langCode = SupporterService.langCode ;
  }
  ngOnInit() {
  }

}
