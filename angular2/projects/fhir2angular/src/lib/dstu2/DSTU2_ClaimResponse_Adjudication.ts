import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Money } from './DSTU2_Money'

export class DSTU2_ClaimResponse_Adjudication      extends DSTU2_BackboneElement
{

   static def : string = 'ClaimResponse_Adjudication';
   code : DSTU2_Coding ;
   amount : DSTU2_Money ;
   value : string ;
}
