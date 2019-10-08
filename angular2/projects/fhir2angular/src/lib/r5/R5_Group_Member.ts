import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Group_Member      extends R5_BackboneElement
{

   static def : string = 'Group_Member';
   entity : R5_Reference ;
   period : R5_Period ;
   inactive : boolean ;
}
