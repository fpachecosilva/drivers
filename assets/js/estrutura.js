const miniPcData = [    
        {
            name: '2KV2',
            id: '0',
            cod: '',
            cat: 'minipc',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/2kv2.png',
            linksArray: [
                {                    
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSS3JlbTllTTlsMVE',
                    desklink: 'USB (1).zip'
                },
    
                {                    
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSVnpyN2piS2hWc2M',
                    desklink: 'LAN.zip'
                },
    
                {                    
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSWWlacGt1a29RYmc',
                    desklink: 'TXE.zip'
                },
    
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSYUxZRTdpVzREMG8',
                    desklink: 'VGA.zip'
                },
    
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSaW44Q1VQQndtaGs',
                    desklink: 'Chipset.zip'
                },
    
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSajhQT3czM1A4OFU',
                    desklink: 'Audio.zip'
                }
            ],
            
            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1Etg-PZVej5vKDQRu_1kmWv8bwCCj7upi',
                    deskdatasheet: '2KV2 J1800'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1lLVIL5i773oGoxidZcD-dnq-MRD163yp',
                    deskdatasheet: '2KV2 J4105'
                }
            ],

            
            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: '2KV4-K J4005',
            id: '1',
            cod: '',
            cat: 'minipc',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/2kv4k-j4005.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1luOR31Aqd7xALpeZUnMHBkU8S1Ica_rv',
                    desklink: '2KV4K J4005 WIN10 64bits.zip'
                }
            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'LV Plus 4100',
            id: '2',
            cod: '',
            cat: 'minipc',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/lvplus4100.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1sYqQt9VAyxOKOJfaoGwMSoXyrFCBIdJ3',
                    desklink: 'LV PLUS 4100.zip'
                }
            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1Finf1HuKv2R67ees8VHjsRXltiEYss7I',
                    deskdatasheet: 'LV 4100.pdf'
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Touch BTX',
            id: '3',
            cod: '',
            cat: 'minipc',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/btx.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1tUVKhVyHKWn6G_pr1xw7iQUIQqtrGUyj',
                    desklink: 'BTX 10.zip'
                }
            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1GODhzYv79eosisPGbkjs8c0kjN0NiZIK',
                    deskdatasheet: 'BT-X Touch.pdf'
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'NUC BX',
            id: '4',
            cod: '',
            cat: 'minipc',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/bx.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSMWtPRHJhWjFlanc',
                    desklink: 'Usb_3_Win7_32x.zip'
                },
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSRWRHeFVSQlhCWGc',
                    desklink: 'HOTFIX_Win7_32x.zip'
                },
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSUVVld3VJR0hic00',
                    desklink: 'Chipset_Win7_32x.zip'
                },
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSUXBPd3kwNXd2OVk',
                    desklink: 'Bluetooth_win7_32x.zip'
                },
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSX2kyb0s3V21CTFE',
                    desklink: 'ME_Win7_32x.zip'
                },
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSa3I3MTFhNE5vNmc',
                    desklink: 'Trusted_Win7_32x.zip'
                },
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSbWUxaUNMd2pfRzg',
                    desklink: 'Lan_Win7_32x.zip'
                },
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQScWRFYW4teFF6ems',
                    desklink: 'Vga_Win7_32x.zip'
                },
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQScnJ0Y0lsNlNSSzA',
                    desklink: 'AUDIO_Win7_32x.zip'
                },
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSeDFzck94YnBjMWM',
                    desklink: 'Wifi_Win7_32x.zip'
                },
            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1EEjF5TGxMyMsh_7orhhtHnJJcMgD5sh3',
                    deskdatasheet: 'NUC-BX.pdf'
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'EVX',
            id: '5',
            cod: '',
            cat: 'minipc',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/evx.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1MPsbPfPPIQU4eIkpYGYRLd9Ar4QeEN7Z',
                    desklink: 'EVX DRIVERS Win10.zip'
                }
            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: '2KV3 Core i3-i5-i7',
            id: '6',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/2kv3.png',

            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=15j4GiDsC1KSqglNylkCLz2yOPbXVtBjP',                    
                    desklink: 'Windows 10 64 bits.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1c9Tv9OhtePoX8XPFN8BspJ1JhvWptfdj',
                    desklink: 'Windows 7 64 bits.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1kkA5pe9R6cjI30mmk1zmI_dMx86ZVhur',
                    desklink: 'Windows 7 32 bits.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1r8IsoJF5oVOntz8H6xa5OmWmlwDlXjOs',
                    desklink: 'Windows 8.1 64 bits.zip'
                }
            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: '2KV3 J3060',
            id: '7',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/2kv3.png',
            
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSRGFhNVlVWi1CRUk',
                    desklink: 'Windows 8.1 64 bits.rar'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSTGx6OC02VXg4dTg',
                    desklink: 'Windows 10 32 bits.rar'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSU0VQcFdpUjM4NU0',
                    desklink: 'Windows 7 64 bits.rar'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSZG5CRDNfTXRvbXM',
                    desklink: 'TXE Win10 32 bits.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSaVFvSnRNcF9wc0E',
                    desklink: 'Windows 10 64 bits.rar'
                }
            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: '3K',
            id: '8',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/3k.png',

            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=10nsrsxP3mCoC9L0iZzApxm0Fe3M_KzAU',
                    desklink: 'Windows 8.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1e5FwKFEQ24fQda5IvY95BTDfX-b3v-0i',
                    desklink: 'Windows 7.zip'
                }
            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Blue J2900',
            id: '9',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/blue2900.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSOWtWOEZ5bmRlcUU',
                    desklink: 'VGA.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSZnNsRVFLTWM2ZjA',
                    desklink: 'LAN.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSbXVVZ2xYTHhZYnM ',
                    desklink: 'TXE.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSck9lVG9FanllTkU',
                    desklink: 'Audio.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSczktYlBSTWZjNkU',
                    desklink: 'USB.zip'
                }

            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Blue LV-XE',
            id: '10',
            cod: '',
            cat: 'minipc',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/xe.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1KSTP5IErdcGHlSVDRJnJjxv7vDuyL9OE',
                    desklink: 'Win10.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1pd9QIzHLkN3xvP-hJfl03Muqw-TPthdB',
                    desklink: 'Win7.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1r2b3HmVKFOu1ghg9WDodZWOhirg97KNZ',
                    desklink: 'Win8.zip'
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1oVovZUf7j-Euo0xXx_IODnSCCnZgDhSJ',
                    deskdatasheet: 'Blue-LV XE.pdf'
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Fusion',
            id: '11',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/fusion.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1u_SMUkTSNC9twqfpdsgBBgtM5H5qCAJN',
                    desklink: 'Win7 e Win8.rar'
                }

            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'IPMH110-PRO PCWARE',
            id: '12',
            cod: '',
            cat: 'board',
            tipo: '',
            desc: '',
            img: 'assets/img/sem.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1KDfjumY1GU6C0v6IYskyCKxM3X8dFi97',
                    desklink: 'H110Driver.rar'
                }

            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'IPX1800 E2',
            id: '13',
            cod: '',
            cat: 'board',
            tipo: '',
            desc: '',
            img: 'assets/img/sem.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSaE51VWEwLVExQVk',
                    desklink: 'Windows 7 32 Bits.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSWE9tODNuaFBZTGs',
                    desklink: 'Windows 7 64 Bits.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSMVozME9GWkxiblE',
                    desklink: 'Windows 8.1 32 Bits.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSVnExQUhISW9leUE',
                    desklink: 'Windows 8.1 64 Bits.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSQ2Jhd295SG5jeTg',
                    desklink: 'Windows 10 32 Bits.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQScUdaMlNuMUxRUEE',
                    desklink: 'Windows 10 64 Bits.zip'
                }

            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'IPX 1800 P1',
            id: '14',
            cod: '',
            cat: 'board',
            tipo: '',
            desc: '',
            img: 'assets/img/sem.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSQVlBQmYyRVI1R1E',
                    desklink: 'VGA.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSZldfMlRNN1U4Ym8',
                    desklink: 'USB.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSa2hwMFVsbmRLcGc',
                    desklink: 'TXE.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSaFB4cTk0TnBLLVE',
                    desklink: 'Chipset.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSd0FqaUxVd2pGc2c',
                    desklink: 'LAN.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSeDRBbVN0TVdjaVU',
                    desklink: 'Audio.zip'
                },

            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'LV Plus',
            id: '15',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/lvplus.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1-zk9DeMJnk7HGBug58Kp59TjaMRASL2D',
                    desklink: 'Windows 10 64 bits.zip'
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=15Z1J1l3reWXtviWhpjc0s-Wlz-wr-FDr',
                    deskdatasheet: 'LV Plus.pdf'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1qa4NsifcTIdAGLDoFjIR831gxw2824p5',
                    deskdatasheet: 'LV Plus Serial.pdf'
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'N3060',
            id: '16',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/n3060.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1-zk9DeMJnk7HGBug58Kp59TjaMRASL2D',
                    desklink: 'Windows 10 64 bits.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1GEv69XjlhixmUCfKyCVjs4xdycaJfZJg',
                    desklink: 'Win 7 64 bits.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1sY8bTuORoeNLSzfAGoimZmxwdfcCFIDz',
                    desklink: 'Win 8.1 64 bits.zip'
                },

            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Nano Slim',
            id: '17',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/nanoslim.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1-ODt8B2uKRJx6WzOJ4qzEsmPJDscY_9e',
                    desklink: 'Win7.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1Y3qFIcvaBbCMfKxYpG_Kq0Uyms3JuJqM',
                    desklink: 'Win8.zip'
                }

            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Nano Slim AMD',
            id: '18',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/nanoslimamd.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=165kLIpiJ4y6fYaKxVnoSHvwZ0q_pct_e',
                    desklink: 'Nano Slim AMD.zip'
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=13QcJmu0uT9yXfx4xkoZ1PYTGnKlcrAE_',
                    deskdatasheet: 'Nano Slim AMD.pdf'
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Nettop 1037',
            id: '19',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/nettop.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSRlJVZHBVOC1IZXM',
                    desklink: 'LAN.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSTWZDMlJ3b2g1T0E',
                    desklink: 'Audio.zip'
                },
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSWnlEQ01TWmVBR2s',
                    desklink: 'ME.zip'
                },
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSb05xckRSVmJaVXc',
                    desklink: 'Chipset.zip'
                },

            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Nettop J1800',
            id: '20',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/nettop.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1KlF7KWhhYcomMzB-bg5AMPv9pGKMngq4',
                    desklink: 'Win 7 e Win8.zip'
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSem83SG5KX1p1MFk',
                    deskdatasheet: 'NettopJ1800.pdf'
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Nettop KX',
            id: '21',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/nettopkx.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=10cSjXP2o9f9xZqAC2lG47TmoahIw8xMN',
                    desklink: 'ITECIR.zip'
                },
                
                {
                    link: 'https://drive.google.com/uc?export=download&id=1CRd4hwpp_yl7PVtoELtJ0jfNss5kdgCN',
                    desklink: 'AUDIO.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1F-r-DpGgs9Km1Gd0o38N8D5YFocBnRXz',
                    desklink: 'AR5B125-wifi-Driver.rar'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1Ktagb-GA4UbvT_EjsPCBNYnCIVDRx7Nd',
                    desklink: 'ME.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1XNYDZEA7f-3CH6JW6_Mzy2dODjQX4EBi',
                    desklink: 'USB3.0.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1d86HB8XqZpI0e-9e_AbKNjYGGuknOgHQ',
                    desklink: 'VGA.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1jH63hosA7_cfBV_QkKqL4lAZ8uAOQkqN',
                    desklink: 'CHIPSET.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1nzINJcj4q16tjjLvKH2Xfr_MnOTcYNfo',
                    desklink: 'WIFI.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1oSSeF9DhLDxq6z_yOEZU7bZgtdgKoPxr',
                    desklink: 'Intel_TXE_hotfix_Win7.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1rE2kF4DJJfLyb16tvr2AElJEl5t_dIJq',
                    desklink: 'LAN.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1vIX8ajfxKxhK2L3v_o3VYfcH4MVWVXPL',
                    desklink: 'MBI.zip'
                },

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1ZUkKNWjIFGU8FAk9WLqeUD9sbiuO08ES',
                    deskdatasheet: 'KX.pdf'
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Nettop One',
            id: '22',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/nettopone.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSMG14TDJudWM3cG8',
                    desklink: 'Framework.rar'
                },
                
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSTmZjT1lDYUJHczQ',
                    desklink: 'ME.rar'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSU0RiN3loSFpwX0k',
                    desklink: 'RAID.rar'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSUE1XTE95TFgtakU',
                    desklink: 'Chipset.rar'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSZ05sZl9lejlYS2c',
                    desklink: 'VGA.rar'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSaWJlU09tX0UyaUU',
                    desklink: 'UAA.rar'
                }

            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'NUC LV - Linha Core i3 e i5',
            id: '23',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/nuclv.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1-S0MKF7bSL7hpQJX3kS0sNmXq-jYvM3R',
                    desklink: 'VGA.zip'
                },
                
                {
                    link: 'https://drive.google.com/uc?export=download&id=147d1XytExtap-vwSzNN0QMZBwnGFXjgX',
                    desklink: 'Serial_IO.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1CKzzypq9qL2St93CZKqYJp15Doro-3mh',
                    desklink: 'WLAN.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1EbhPDUfAKFu7ePAxSJ6WDQUuzUWkiqQB',
                    desklink: 'Chipset.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1K1SuLTH62UR3lW-ayMiruvEaVTTcGw0q',
                    desklink: 'Storage.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1RljUk7nsq8vIVc9W4_xcCbFNIIS1SZWV',
                    desklink: 'ME.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1_c2_-xwQzgWQBo4UYFXtrzYyYbSY31Pt',
                    desklink: 'LAN.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1_z_j0aN1grKe5qmZSdPcTNTihOtGcOLm',
                    desklink: 'Sound.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1p588ZUzIqkb3qQpTCUijq7uiOu6vKf44',
                    desklink: 'TXE.zip'
                },

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1d5Q82emmPSg2WdtXkw4OcMHrkAXFeNhy',
                    deskdatasheet: 'NUC-LV-Linha-Core-i3-i5-i7.pdf'
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Terminal Touch Bluetech',
            id: '24',
            cod: '',
            cat: 'touch',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/terminalblue.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1dVsazfNs_NTtJd3j9Ki7yk7k4O692fvW',
                    desklink: 'Terminal Touch Bluetech.zip'
                }

            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Touch 8.9',
            id: '25',
            cod: '',
            cat: 'touch',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/touch8.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSQjVIWGNfWHN4ZTg',
                    desklink: 'Touch8.9.zip'
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=142w-7QoaNq4QGxIcUNwH-G1sSiV4MLsr',
                    deskdatasheet: 'Touch 8.9 e 10.8.zip'
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Touch 10.8',
            id: '26',
            cod: '',
            cat: 'touch',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/touch10.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSM3BoSkpJNDFxdFU',
                    desklink: 'BT&WIFI.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSNnZtcDRvcnd6Tnc',
                    desklink: 'Audio.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSTkV6VThBOTcyMWc',
                    desklink: 'RJ45.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSV1drQzZCNW5GZGM',
                    desklink: 'Gsensor.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSb29Rb1NMdnpWUGc',
                    desklink: 'TP.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQScVFmWndYdm4wSEU',
                    desklink: 'Chip.zip'
                },

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=142w-7QoaNq4QGxIcUNwH-G1sSiV4MLsr',
                    deskdatasheet: 'Touch 8.9 e 10.8.zip'
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'X5',
            id: '27',
            cod: '',
            cat: 'minipc',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/x5.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1uO1qnH_zwuruDm24jUsGPCAe-DIb57q3',
                    desklink: 'X5.zip'
                }

            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Z37',
            id: '28',
            cod: '',
            cat: 'minipc',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/z37.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSWGdBN0JkQktEX2c',
                    desklink: 'Z37.zip'
                }

            ],

            datasheetsArray: [
                {
                    link: '',
                    deskdatasheet: ''
                }
            ],

            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }
        },

        {
            name: 'Zotac CI323',
            id: '29',
            cod: '',
            cat: 'minipc',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/zotacci323.png',
            linksArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=12YqN2vFb9XR7r6YA5L1boPpY4BIVixiS',                    
                    desklink: 'LAN e Bluetooth.zip'
                },
                
                {
                    link: 'https://drive.google.com/uc?export=download&id=15EQJpWnZN1Fjay8fyB6bTOfw1TPm3_Yl',
                    desklink: 'VGA.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1g2J8aIf-aZ2Nc_woFYO3Tf5dxd4_Y4Ld',
                    desklink: 'Card USB INF e TXE.zip'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1lFchV-VpYXRvpbGkv0WnAEPMtYzri5By',
                    desklink: 'Audio.zip'
                },

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSTk9Ca2pyQXM2dTQ',
                    deskdatasheet: 'Zotac CI 323.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: '2KV4-K',
            id: '30',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/2kv4k.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1RzjRlV0ClYcqvwqZr0FhScMDwzVjU-by',
                    deskdatasheet: '2KV4-K Dual Core.pdf'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1DeHFyZtxBnF7E7RnxCstlQHuLwjAU0El',
                    deskdatasheet: '2KV4-K Quad Core.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: 'Android',
            id: '31',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/android.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1l2bS2CO262qscRqN0lb3neXDQMeUfBg3',
                    deskdatasheet: 'Android.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: 'Blue AL',
            id: '32',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/blueal.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1MLuDapUH4oKTtHN-1r-dXntLYS8wkXq7',
                    deskdatasheet: 'Blue-AL-seminovo.pdf'
                },

                {
                    link: 'https://drive.google.com/uc?export=download&id=1HX16wsoQIxkpsvzZyL1BXQbT9CEH81gU',
                    deskdatasheet: 'Blue-AL.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: 'Controle de Fluxo',
            id: '33',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/fluxo.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSSzNLbklHVmRhRnM',
                    deskdatasheet: 'Controle de fluxo.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: 'IBT 1800',
            id: '34',
            cod: '',
            cat: 'minipc',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/ibt1800.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1MwbO1XdrP0RGDeETY10rTCvp4aZbz9Pl',
                    deskdatasheet: 'IBT 1800.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: 'Nuc Brix Gigabyte',
            id: '35',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/brix.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1vXI_olofGoEqyVlt3hOAO2v1LLn8kT3a',
                    deskdatasheet: 'Nuc Brix Gigabyte i3-i5.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: 'Nuc Industrial i3',
            id: '36',
            cod: '',
            cat: 'minipc',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/industriali3.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1ZjRPFaz0EK0o3mP4dpZ2Rd2yWLQ6rDr7',
                    deskdatasheet: 'Nuc Industrial Core i3.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: 'Nuc Intel J3455',
            id: '37',
            cod: '',
            cat: 'minipc',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/nucj3455.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=17Q_YR0aHHtNB8R4syJpagxbPlBx15IFf',
                    deskdatasheet: 'Nuc Intel.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: 'Nuc WX 5200',
            id: '38',
            cod: '',
            cat: 'minipc',
            tipo: 'atual',
            desc: '',
            img: 'assets/img/wx5200.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1aVRGWrHL3F0wJE6x_pdpnNvmqr7kdwCy',
                    deskdatasheet: 'Nuc WX5200.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: 'Nuc LV Celeron',
            id: '39',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/nuclv.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1wVYVmfBlWXG9pO-1W2YesrJKPHG8C19Y',
                    deskdatasheet: 'NUC-LV-Celeron.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: 'Quick P',
            id: '40',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/quick.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1ydi387YSS_W8C1L9iYLiu0N9-0WWy4jX',
                    deskdatasheet: 'QuickP.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: 'Quick S',
            id: '41',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/quick.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1gs1n-hCX61L_-Zlnrct5pf0JegdDctcn',
                    deskdatasheet: 'Quick S.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: 'Server Slim',
            id: '42',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/serverslim.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1V2eZSSsfy35AC-VgjBIbA76h-TT5SOOY',
                    deskdatasheet: 'Server Slim.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: 'Servidores',
            id: '43',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/sem.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=0B5Io3dIwUuQSTXBSQjFES1ZXTE0',
                    deskdatasheet: 'Servidores.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        },

        {
            name: 'TKR',
            id: '44',
            cod: '',
            cat: 'minipc',
            tipo: 'antigo',
            desc: '',
            img: 'assets/img/tkr.png',
            linksArray: [
                {
                    link: '',
                    desklink: ''
                }

            ],

            datasheetsArray: [
                {
                    link: 'https://drive.google.com/uc?export=download&id=1H4JUZtkMDogxkjq5zDE9hQtkKE9JB_qq',
                    deskdatasheet: 'TKR.pdf'
                }
            ],


            get drivers() {
                arr = this.linksArray;
                let myHTML = '';
                arr.forEach(links => myHTML += `<li><a href="${links.link}" target='_blank'> ${links.desklink} </a></li>`);
                return myHTML
            },

            get datasheets() {
                arr = this.datasheetsArray;
                let myHTML = '';
                arr.forEach(datasheets => myHTML += `<li><a href="${datasheets.link}" target='_blank'> ${datasheets.deskdatasheet} </a></li>`);
                return myHTML
            }

        }

];


function miniPCTemplate(minipcs)  {
    return `
        <div class="produto" id="${minipcs.id}" onclick="mostraContainer(this.getAttribute('id'))" >
            <div class="box">
                <img src=" ${minipcs.img} "/>
                <i class="fas fa-cogs" title="POSSUI DRIVERS"></i>
                <i class="fas fa-file-pdf" title="POSSUI DATASHEETS"></i>
                <p class="titulo"> ${minipcs.name} </p>
            </div>
        </div>
    `;    
}


function preencheBoxes(id) {
    document.getElementById('boxes').innerHTML = `${miniPcData.map(miniPCTemplate).join('')}`;

    var produto = document.querySelectorAll('.produto')
    
    for( var i=0; i < produto.length; i++ ) {
        produtoID = produto[i].id

        var links = miniPcData[produtoID].linksArray[0].link
        var datasheets = miniPcData[produtoID].datasheetsArray[0].link

        if ( links.length <= 1 ) {
            produto[produtoID].querySelector('.fa-cogs').style.display = 'none';
        } else {
            produto[produtoID].querySelector('.fa-cogs').style.display = 'inline-block';
        }

        if ( datasheets.length <= 1 ) {
            produto[produtoID].querySelector('.fa-file-pdf').style.display = 'none';
        } else {
            produto[produtoID].querySelector('.fa-file-pdf').style.display = 'inline-block';
        }
    }
}

preencheBoxes();


   
boxProdutos = document.querySelectorAll('.produto')
produtos = document.querySelectorAll('.produto .titulo')

const input = document.getElementById('pesquisa');
const trs = produtos;

input.addEventListener('input', () => {
    const search = input.value.toLowerCase();
    trs.forEach(el => {
        const matches = el.textContent.toLowerCase().includes(search);
        el.parentNode.parentNode.style.display = matches ? 'block' : 'none';
               

    });
});



function miniPCTemplateImg(listar) {
    return `${listar.img}`;
}

function miniPCTemplateName(listar) {
    return `${listar.name}`;
}


function miniPCTemplateDriver(listar) {
    return `${listar.drivers}`;
}

function miniPCTemplateDatasheet(listar) {
    return `${listar.datasheets}`;

}

function preencheContainer(id) { 
    document.querySelector('.container-produto img').src = `${miniPcData.map(miniPCTemplateImg)[id]}`;    
    document.querySelector('.container-produto h1').innerHTML = `${miniPcData.map(miniPCTemplateName)[id]}`;
    document.querySelector('.container-box ul').innerHTML = `${miniPcData.map(miniPCTemplateDriver)[id]}`;    
    document.querySelector('.container-box.datasheet ul').innerHTML = `${miniPcData.map(miniPCTemplateDatasheet)[id]}`;    

    var links = document.querySelectorAll('.container-box.driver a');
    var linksbox = document.querySelector('.container-box.driver');
    var datasheets = document.querySelectorAll('.container-box.datasheet a');
    var datasheetsbox = document.querySelector('.container-box.datasheet');

    for(var i = 0; i < links.length; i++) {
        if (links[i].href.indexOf('index') > 0 || links[i].href.indexOf('drivers') > 0 || links[i].href.indexOf('bluetech') > 0 ) {
            linksbox.style.display = 'none'
        } else {
            linksbox.style.display = 'inline-block'
        }
    }

    for (var i = 0; i < datasheets.length; i++) {
        if (datasheets[i].href.indexOf('index') > 0 || datasheets[i].href.indexOf('drivers') > 0 || datasheets[i].href.indexOf('bluetech') > 0 ) {
            datasheetsbox.style.display = 'none'
        } else {
            datasheetsbox.style.display = 'inline-block'
        }
    }
    
}


function mostraContainer(id) {
    var container = document.querySelector('#container');
    var pelicula = document.querySelector('.pelicula');
    var botaofecha = document.querySelector('#botao-fechar');
    container.classList.add('active');
    pelicula.classList.add('active');
    botaofecha.classList.add('active');

    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.key === "Escape") {
            escondeContainer();
        }
    }

    preencheContainer(id);
}


function escondeContainer() {
    var container = document.querySelector('#container');
    var pelicula = document.querySelector('.pelicula');
    var botaofecha = document.querySelector('#botao-fechar');
    container.classList.remove('active');
    pelicula.classList.remove('active');
    botaofecha.classList.remove('active');
}