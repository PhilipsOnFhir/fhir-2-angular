import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Group_Member      extends R4_1_BackboneElement
{

   static def : string = 'Group_Member';
   entity : R4_1_Reference ;
   period : R4_1_Period ;
   inactive : boolean ;
}
