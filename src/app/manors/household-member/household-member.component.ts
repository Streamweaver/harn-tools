import { Component, OnInit, Input } from '@angular/core';
import { IHouseholdMember } from './../shared/models/housemember.model';

@Component({
  selector: '[app-household-member]',
  templateUrl: './household-member.component.html',
  styleUrls: ['./household-member.component.scss']
})
export class HouseholdMemberComponent implements OnInit {
  @Input('member') member: IHouseholdMember;

  constructor() {}

  ngOnInit() {}
}
