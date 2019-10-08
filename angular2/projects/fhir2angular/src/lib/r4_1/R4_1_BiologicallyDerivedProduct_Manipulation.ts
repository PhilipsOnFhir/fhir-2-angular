import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_BiologicallyDerivedProduct_Manipulation      extends R4_1_BackboneElement
{

   static def : string = 'BiologicallyDerivedProduct_Manipulation';
   description : string ;
   timeDateTime : string ;
   timePeriod : R4_1_Period ;
}
