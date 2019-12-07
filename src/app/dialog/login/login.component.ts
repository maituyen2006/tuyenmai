import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../service/account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Md5 } from 'ts-md5/dist/md5';
import { ResponseApi } from '../../class/response-api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;


    constructor(private accountS: AccountService, private router: Router, private snackBar: MatSnackBar, private route: ActivatedRoute) { }

    ngOnInit() {
        this.loadScript();
    }
    public loadScript() {
        let body = <HTMLDivElement>document.body;
        let script = document.createElement('script');
        script.innerHTML = '';
        script.src = '../../../assets/js/check-pass1.js';
        script.async = true;
        script.defer = true;
        body.appendChild(script);
    }

    preventDefault(event: any) {
        event.preventDefault();
    }

    login( event: any )
    {
        // this.preventDefault( event );
        // this.preventDefault(event);
        // if (!this.username || !this.password) {
        //   alert('Tên đăng nhập hoặc mật khẩu không được để trống');
        //   return;
        // }
        // const formData = new FormData();
        // const md5 = new Md5();
        // formData.append( 'username', this.username );
        // formData.append( 'password', md5.appendStr( this.password ).end().toString() );
        // this.accountS.login( formData ).subscribe( ( res: ResponseApi ) =>
        // {
            
        //     if ( res.success )
        //     {
        //         localStorage.setItem( 'CURRENT_ACCOUNT', JSON.stringify( res.data ) );
               
        //         this.snackBar.open( res.message, 'Đóng', {
        //             panelClass: ['style-success'], duration: 2500
        //         } );
        //         if ( res.data.role === true ) {                       
        //             this.router.navigateByUrl('/home-manage' );                        
        //          }
        //          else
        //          {
        //              this.router.navigateByUrl( '/home' );
        //          }
        //     }
        //     else
        //     {
        //         this.snackBar.open( res.message, 'Đóng', { panelClass: ['style-error'], duration: 2500 } );
        //     }

            
        // }
            
        // );
        
        
        // if (res.success) {
        //     if (res.data.role && res.data.role.moduleUrls) {
        //       res.data.moduleUrls = res.data.role.moduleUrls.split(',');
        //     }
        //     res.data.moduleUrls.push('/home-manage');
        //     localStorage.setItem('CURRENT_ADMIN', JSON.stringify(res.data));
        //     this.snackBar.open(res.message, 'Đóng', {
        //       panelClass: ['style-success'],
        //       duration: 2500
        //     });
        //     this.route.queryParams.subscribe(params => {
        //       const returnUrl = params['returnUrl'];
        //       if (returnUrl) {
        //         this.router.navigate([returnUrl]);
        //       } else {
        //         this.router.navigate(['/home']);
        //       }
        //     });
        //   } else {
        //     this.snackBar.open(res.message, 'Đóng', {
        //       panelClass: ['style-error'],
        //       duration: 2500
        //     });
        //   }
        // });

        // this.preventDefault(event);
        // if (!this.username || !this.password) {
        //     alert('Tên đăng nhập hoặc mật khẩu không được để trống');
        //     return;
        // }
    //     const formData = new FormData();
    //     const md5 = new Md5();
    //     formData.append('username', this.username);
    //     formData.append('password', md5.appendStr(this.password).end().toString());
    //     this.accountS.login(formData).subscribe((res: ResponseApi) => {
    //         if (res.success) {
    //             if (res.data.role && res.data.role.moduleUrls) {
    //                 res.data.moduleUrls = res.data.role.moduleUrls.split(',');
    //             }
    //             res.data.moduleUrls.push('/default');
    //             localStorage.setItem('CURRENT_ADMIN', JSON.stringify(res.data));
    //             this.snackBar.open(res.message, 'Đóng', {
    //                 panelClass: ['style-success'],
    //                 duration: 2500
    //             });
    //             this.route.queryParams.subscribe(params => {
    //                 const returnUrl = params['returnUrl'];
    //                 if (returnUrl) {
    //                     this.router.navigate([returnUrl]);
    //                 } else {
    //                     this.router.navigate(['/verified']);
    //                 }
    //             });
    //         } else {
    //             this.snackBar.open(res.message, 'Đóng', {
    //                 panelClass: ['style-error'],
    //                 duration: 2500
    //             });
    //         }
    //     });
    // }


    this.preventDefault( event );
    
    this.preventDefault(event);
    if (!this.username || !this.password) {
        alert('Tên đăng nhập hoặc mật khẩu không được để trống');
        return;
    }
    let formData = new FormData();
    let md5 = new Md5();
    formData.append( 'username', this.username );
    formData.append( 'password', md5.appendStr( this.password ).end().toString() );

    
    this.accountS.login( formData ).subscribe( ( res: ResponseApi ) =>
    {
       
        if ( res.success ) {
            localStorage.setItem( 'CURRENT_ACCOUNT', JSON.stringify( res.data ) );
            this.snackBar.open( res.message, 'Đóng', {
                panelClass: ['style-success'], duration: 2500
            } );
            this.route.paramMap.subscribe( params =>   {
                const returnUrl = params['returnUrl'];
                
                    if ( res.data.role == true )   {
                        
                        this.router.navigate( ['/admin/home-manage'] );

                    }
                
                else   {
                    this.router.navigate( ['/home'] );
                }
            } );
        }
        else    {
            this.snackBar.open( res.message, 'Đóng', { panelClass: ['style-error'], duration: 2500 } );
        }


    }

    );

}


}