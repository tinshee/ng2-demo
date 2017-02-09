import {Component, OnInit} from "@angular/core";
import {NavController} from "ionic-angular";
import {BannerService} from "./banner.service";
import {Observable} from "rxjs";

@Component({
    selector: 'page-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']

})

export class HomeComponent implements OnInit {

    banners: Array<any>;

    constructor(private navCtrl: NavController, private bannerSv: BannerService) {

    }

    ngOnInit() {
        this.getBanners();
    }

    getBanners() {
        return this.bannerSv.get().subscribe(heroes => {
            return this.banners = heroes;
        })
    }

}