import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Account_Guarantor      extends R5_BackboneElement
{

   static def : string = 'Account_Guarantor';
   party : R5_Reference ;
   onHold : boolean ;
   period : R5_Period ;
}
