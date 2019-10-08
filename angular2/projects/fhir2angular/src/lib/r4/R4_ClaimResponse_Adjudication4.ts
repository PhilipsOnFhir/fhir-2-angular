import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Money } from './R4_Money'

export class R4_ClaimResponse_Adjudication4      extends R4_BackboneElement
{

   static def : string = 'ClaimResponse_Adjudication4';
   code : R4_Coding ;
   amount : R4_Money ;
   value : string ;
}
