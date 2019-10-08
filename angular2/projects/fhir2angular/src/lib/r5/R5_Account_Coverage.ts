import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Account_Coverage      extends R5_BackboneElement
{

   static def : string = 'Account_Coverage';
   coverage : R5_Reference ;
   priority : string ;
}
