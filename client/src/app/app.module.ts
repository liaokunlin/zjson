import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SharedBroadcastService } from './@shared/index';
import { BsDropdownModule, ModalModule, TooltipModule } from 'ngx-bootstrap';
import {
  MonacoEditorComponent, MonacoDiffEditorComponent, MonacoEditorService, ZjsDiffEditorComponent
} from './monaco-editor/index';
import {
  AppConfigComponent, ConfigLangComponent, ConfigThemeComponent,
  ConfigIndentComponent, ConfigQuoteComponent
} from './app-config/index';
import {
  ZjsHintComponent, ZjsTitleComponent, ZjsNoticeComponent, ZjsInfoComponent,
  ZjsHistComponent, ZjsLoadingComponent, ZjsUpdateComponent, ZjsCompareComponent
} from './attachments';
import { ZjsonPanelComponent } from './zjson-panel/zjson-panel.component';

export function TranslateFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule,
    HttpClientModule, BrowserAnimationsModule,
    BsDropdownModule.forRoot(), ModalModule.forRoot(), TooltipModule.forRoot(),
    TranslateModule.forRoot({loader: {
      provide: TranslateLoader, deps: [HttpClient],
      useFactory: TranslateFactory
    }})
  ],
  declarations: [
    AppComponent, AppConfigComponent, ConfigLangComponent,
    ConfigThemeComponent, ConfigIndentComponent, ConfigQuoteComponent,
    MonacoEditorComponent, MonacoDiffEditorComponent,
    ZjsDiffEditorComponent, ZjsHintComponent, ZjsTitleComponent,
    ZjsNoticeComponent, ZjsInfoComponent, ZjsHistComponent,
    ZjsLoadingComponent, ZjsUpdateComponent, ZjsCompareComponent, ZjsonPanelComponent
  ],
  providers: [
    AppService, MonacoEditorService, SharedBroadcastService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
