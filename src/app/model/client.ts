export class Client {
    constructor(
        public user: string,
        public name: string,
        public email: string,
        public phone: string,
        public startDate: Date,
        public endDate: Date,
        public dateAdd: Date,
    ) {}
}
