import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Group_Member      extends DSTU2_BackboneElement
{

   static def : string = 'Group_Member';
   entity : DSTU2_Reference ;
   period : DSTU2_Period ;
   inactive : boolean ;
}
